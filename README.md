
# Hogarth Golden Box Pages

[Preview site >>](https://www.campaign.hogarthww.digital/ctus-internal/ctus-gbox-page/dist/)

## TOP SECRECT! SHHHH.. 

## Dev Notes
- Turns out that iOS does not allow video playback that's not a result of a user gesture. Even a `canplaythrough` listener will not work. [More info here >>](https://webkit.org/blog/6784/new-video-policies-for-ios/)
- Added an iOS sniffer to play the video directly on click for iOS and everyone else waits for the video to be ready.  
