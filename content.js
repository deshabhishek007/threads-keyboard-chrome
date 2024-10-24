// content.js

(function () {
    'use strict';

    let profileLink = null;

    // Function to trigger a click event on an element
    function triggerClick(selector) {
        const element = document.querySelector(selector);
        if (element) {
            element.click();
        }
    }

    // Function to find the user's profile link
    function findProfileLink() {
        const profileAnchor = document.querySelector('a[role="link"] svg[aria-label="Profile"]');
        if (profileAnchor && profileAnchor.closest('a')) {
            profileLink = profileAnchor.closest('a').getAttribute('href');
        }
    }

    findProfileLink();

    document.addEventListener('keydown', function (e) {
        if (e.altKey && !e.ctrlKey && !e.metaKey) {
            if (e.code === 'KeyN') {
                e.preventDefault();
                triggerClick('div[role="button"][tabindex="0"]:has(svg[aria-label="Create"])');
            }

            if (e.code === 'KeyS') {
                e.preventDefault();
                triggerClick('a[href="/search"]');
            }

            if (e.code === 'KeyH') {
                e.preventDefault();
                triggerClick('a[href="/"]');
            }

            if (e.code === 'KeyP') {
                e.preventDefault();
                if (profileLink) {
                    triggerClick(`a[href="${profileLink}"]`);
                }
            }

            if (e.code === 'KeyA') {
                e.preventDefault();
                triggerClick('a[href="/activity"]');
            }

            if (e.code === 'KeyF') {
                e.preventDefault();
                window.location.href = 'https://www.threads.net/following';
            }

            if (e.code === 'KeyL') {
                e.preventDefault();
                window.location.href = 'https://www.threads.net/liked';
            }

            if (e.code === 'KeyV') {
                e.preventDefault();
                window.location.href = 'https://www.threads.net/saved';
            }
        }
    });
})();
