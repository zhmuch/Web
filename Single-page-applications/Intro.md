# How hash-based/pushState navigation works

For **hash-based navigation**, the visitor's position in a virtual navigation space is stored in the URL hash, which is the part of the URL after a 'hash' symbol (e.g., /my/app/#category=shoes&page=4). Whenever the URL hash changes, the browser doesn't issue an HTTP request to fetch a new page; instead it merely adds the new URL to its back/forward history list and exposes the updated URL hash to scripts running in the page. The script notices the new URL hash and dynamically updates the UI to display the corresponding item (e.g., page 4 of the "shoes" category).

This makes it possible to support back/forward button navigation in a single page application (e.g., pressing 'back' moves to the previous URL hash), and effectively makes virtual locations bookmarkable and shareable.

**pushState** is an HTML5 API that offers a different way to change the current URL, and thereby insert new back/forward history entries, without triggering a page load. This differs from hash-based navigation in that you're not limited to updating the hash fragment — you can update the entire URL.
