## kk-star-cache-fix
This is a little script to fix "kk Star Ratings Plugin" functionality when using cache and "Unique voting".

## The problem:
When using Wordpress Caching Plugins, Cloudflare, etc. the rating functionality of this plugin breaks, either not allowing new people to vote or allowing people to vote multiple times.

## The solution:
This script.
IMPORTANT: Disable "unique voting" in the plugin for this to work.

## Detailed explanation
This script creates a custom event after rating and marks in local storage that the rating has been completed. Upon subsequent loads the script checks if the user has already rated and disables the rating functionality.

## Further considerations
This method may not be as robust as the original method of storing IPs in database and comparing incoming traffic, and overvoting can still be achieved by clearing browser cache. On the plus-side, it means less bloat (no storing of IPs) and still achieves the basic functionality of one vote per device.
