'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d544c9c4860df3a4252299d5a9a828be",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/back2.png": "ebfb4a62319b59bccfcf36b8806dd2a3",
"assets/images/banner1.png": "26190d4c768d2d35e6f39c1806b2dd7f",
"assets/images/banner2.png": "e212e94ae33f35dbfd83238fd77b6dee",
"assets/images/banner3.png": "f479eff46a40a1efd36c30da68d1557a",
"assets/images/bgg.png": "3aba6ed919698ac4df2685ab54cf7896",
"assets/images/down.png": "4f54ea89e7f8127e44f1ba582a429825",
"assets/images/goto3.png": "f9a7fdb09bfe9a35124e47f40ea73cd4",
"assets/images/logo.png": "cd6b138a5092e49088576727a781a4b0",
"assets/images/my_set.png": "829f205ff3bfafd5c07553cf46628b1c",
"assets/images/ren.png": "39023a56e28bf47caa1bb6cd52b508d1",
"assets/images/rrrrr.png": "d26b1bb2dd03cc0df3892fe69352c318",
"assets/images/sild_1.png": "6d5ee51a259fffeebb7edde5d8709fda",
"assets/images/sild_2.png": "b29d6f454180de7b79f886f5d25541ce",
"assets/images/sild_3.png": "c6929ef3f0bd14c67e4cdfbfb6aa5681",
"assets/images/sild_4.png": "c5ed63c114819931f47d0c1720091c10",
"assets/images/xing_1.png": "7c08dcfcd2bf2a1f5b0f8c864bbdca9e",
"assets/images/xing_2.png": "3a2092a3adb6b9654012133cd1725683",
"assets/images/xing_2_1.png": "9b4253c5ab0c9ef48687630937760271",
"assets/images/xing_2_2.png": "b16797c75f25dbd22987bf25ec4f4b0b",
"assets/images/xing_2_3.png": "73af724fb7493fd04e52235939c2d1a3",
"assets/images/xing_2_4.png": "07578fabbf0143919675b9ede0989765",
"assets/images/xing_2_5.png": "9b4253c5ab0c9ef48687630937760271",
"assets/images/xing_2_6.png": "65401811aa54649cda9be98ff10f8003",
"assets/images/xing_2_7.png": "3a3eb48d03f2f3afe8e18c4199d99900",
"assets/images/xing_3.png": "6b1a310bfe9f0843beb0fece0d2f46a8",
"assets/images/xing_4.png": "d4316bbaba7bcd1af124514a54941b8b",
"assets/images/xing_5.png": "0b88eb001f30bdfd46119db97bd2c246",
"assets/images/xing_6.png": "9550e391307f08a15012db99f1bb257a",
"assets/images/xing_7.png": "142f97483208a12f1215f201d5d47d79",
"assets/NOTICES": "e75cace4dd229f0923f9bd03dcf2587b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "a8796498eec43c2de64cc6515b4de1ef",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/loading.gif": "950265cdf65d152bf3c7d8bb87b2a117",
"icons/logo.png": "cd6b138a5092e49088576727a781a4b0",
"index.html": "b04ac8d0f2e8746f2690fe904b2aeebf",
"/": "b04ac8d0f2e8746f2690fe904b2aeebf",
"logo.png": "cd6b138a5092e49088576727a781a4b0",
"main.dart.js": "3227abb00d25e83d9d9b4cc3836e9baf",
"manifest.json": "dddf31a43c502bc2f0cd396990d78abb",
"version.json": "2df2fecd4c6b17d5f3aa900da53738d0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
