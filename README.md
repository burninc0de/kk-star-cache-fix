This is a little script to fix "kk Star Ratings Plugin" functionality when using cache and "Unique voting".

## The problem:
When using Wordpress Caching Plugins, Cloudflare, etc. the rating functionality of this plugin breaks, either not allowing new people to vote or allowing people to vote multiple times. If you still want to offer people to vote on posts/products while using extensive page caching this can be a real problem.

## The solution:
This script.
IMPORTANT: Disable "unique voting" in the plugin for this to work.

## Installation
Upload kkstarsfix.js to your template's js folder and modify your header.php to include ```<script src="<?php bloginfo('template_directory'); echo'/js/kkstarsfix.js" defer></script>```

## Detailed explanation
This script creates a custom event after rating and marks in local storage that the rating has been completed. Upon subsequent loads the script checks if the user has already rated and disables the rating functionality.

## Further considerations
This method may not be as robust as the original method of storing IPs in database and comparing incoming traffic, and overvoting can still be achieved by clearing browser cache. It's just a quick workaround and far from perfect. On the plus-side, it means less bloat (no storing of IPs) and still achieves the basic functionality of one vote per device.
