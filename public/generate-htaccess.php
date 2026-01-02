<?php
    $manifestPath = './build/asset-manifest.json';
    $htaccessPath = './build/.htaccess';

// Read the asset manifest file
    $manifest = json_decode(file_get_contents($manifestPath), true);

    $mainJs = '';
    $mainJsMap = '';
        foreach ($manifest['entrypoints'] as $entrypoint) {
            if (preg_match('/\.js$/', $entrypoint)) {
                $mainJs = str_replace('static/js/', '', $entrypoint);
                $mainJsMap = str_replace('static/js/', '', str_replace('.js', '.js.map', $entrypoint));
                break;
            }
        }

        if (empty($mainJs) || empty($mainJsMap)) {
            echo "Error: could not determine the name of the main JavaScript file or its source map file\n";
            exit(1);
        }

// Generate the .htaccess file content
    $content  = "\n# Generated the .htaccess file content\n";
    $content .= "<Files {$mainJs}>\n";
    $content .= "  # Serve the corresponding source map file\n";
    $content .= "  Header set X-SourceMap \"{$mainJsMap}\"\n";
    $content .= "</Files>\n\n";

// Add cache-control directives for images, CSS, JS, and woff2 files
    $content .= "# Cache images for one year\n";
    $content .= "<FilesMatch \"\.(jpg|jpeg|png|gif|svg)$\">\n";
    $content .= "  Header set Cache-Control \"max-age=31536000, public\"\n";
    $content .= "</FilesMatch>\n\n";

    $content .= "# Cache CSS and JS for one week\n";
    $content .= "<FilesMatch \"\.(css|js)$\">\n";
    $content .= "  Header set Cache-Control \"max-age=604800, public\"\n";
    $content .= "</FilesMatch>\n\n";

    $content .= "# Cache woff2 for one year\n";
    $content .= "<FilesMatch \"\.(woff2)$\">\n";
    $content .= "  Header set Cache-Control \"max-age=31536000, public\"\n";
    $content .= "</FilesMatch>\n";

// Serve index.html for all requests (React Router support)
    $content .= "\n# Serve index.html for all requests (React Router support)\n";
    $content .= "<IfModule mod_rewrite.c>\n";
    $content .= "  RewriteEngine On\n";
    $content .= "  RewriteBase /\n";
    $content .= "  RewriteRule ^index\.html$ - [L]\n";
    $content .= "  RewriteCond %{REQUEST_FILENAME} !-f\n";
    $content .= "  RewriteCond %{REQUEST_FILENAME} !-d\n";
    $content .= "  RewriteCond %{REQUEST_FILENAME} !-l\n";
    $content .= "  RewriteRule . /index.html [L]\n";
    $content .= "</IfModule>\n";

    var_dump($manifest);

// Write the content to the .htaccess file
    file_put_contents($htaccessPath, $content);

// Output a message indicating success
    echo "Generated .htaccess file\n";
