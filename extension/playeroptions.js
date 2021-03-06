window.yt2pPlayerOptions = {
  mpv: [
    '--alang=<languagecode[,languagecode,...]>',
    '--slang=<languagecode[,languagecode,...]>',
    '--aid=<ID|auto|no>',
    '--sid=<ID|auto|no>',
    '--vid=<ID|auto|no>',
    '--ff-aid=<ID|auto|no>',
    '--edition=<ID|auto>',
    '--track-auto-selection=<yes|no>',
    '--start=<time>',
    '--end=<time>',
    '--length=<time>',
    '--rebase-start-time=<yes|no>',
    '--speed=<0.01-100>',
    '--pause',
    '--shuffle',
    '--chapter=<start[-end]>',
    '--playlist-start=<auto|index>',
    '--playlist=<filename>',
    '--chapter-merge-threshold=<number>',
    '--chapter-seek-threshold=<seconds>',
    '--hr-seek=<no|absolute|yes>',
    '--hr-seek-demuxer-offset=<seconds>',
    '--hr-seek-framedrop=<yes|no>',
    '--index=<mode>',
    '--load-unsafe-playlists',
    '--access-references=<yes|no>',
    '--loop-playlist=<N|inf|force|no>',
    '--loop-file=<N|inf|no>',
    '--ab-loop-a=<time>',
    '--ordered-chapters',
    '--ordered-chapters-files=<playlist-file>',
    '--chapters-file=<filename>',
    '--sstep=<sec>',
    '--stop-playback-on-init-failure=<yes|no>',
    '--no-config',
    '--list-options',
    '--list-properties',
    '--list-protocols',
    '--log-file=<path>',
    '--config-dir=<path>',
    '--save-position-on-quit',
    '--dump-stats=<filename>',
    '--idle=<no|yes|once>',
    '--include=<configuration-file>',
    '--load-scripts=<yes|no>',
    '--script=<filename>',
    '--script-opts=key1=value1,key2=value2,...',
    '--merge-files',
    '--no-resume-playback',
    '--profile=<profile1,profile2,...>',
    '--reset-on-next-file=<all|option1,option2,...>',
    '--write-filename-in-watch-later-config',
    '--ignore-path-in-watch-later-config',
    '--show-profile=<profile>',
    '--use-filedir-conf',
    '--ytdl',
    '--ytdl-format=<best|worst|mp4|webm|...>',
    '--ytdl-raw-options=<key>=<value>[,<key>=<value>[,...]]',
    '--player-operation-mode=<cplayer|pseudo-gui>',
    '--vo=<driver>',
    '--vd=<...>',
    '--vf=<filter1[=parameter1:parameter2:...],filter2,...>',
    '--untimed',
    '--framedrop=<mode>',
    '--display-fps=<fps>',
    '--hwdec=<api>',
    '--opengl-hwdec-interop=<name>',
    '--videotoolbox-format=<name>',
    '--panscan=<0.0-1.0>',
    '--video-aspect=<ratio|no>',
    '--video-aspect-method=<bitstream|container>',
    '--video-unscaled=<no|yes|downscale-big>',
    '--video-pan-x=<value>',
    '--video-rotate=<0-359|no>',
    '--video-stereo-mode=<no|mode>',
    '--video-zoom=<value>',
    '--video-align-x=<-1-1>',
    '--correct-pts',
    '--fps=<float>',
    '--deinterlace=<yes|no>',
    '--frames=<number>',
    '--video-output-levels=<outputlevels>',
    '--hwdec-codecs=<codec1,codec2,...|all>',
    '--audio-pitch-correction=<yes|no>',
    '--audio-device=<name>',
    '--audio-exclusive=<yes|no>',
    '--audio-fallback-to-null=<yes|no>',
    '--ao=<driver>',
    '--af=<filter1[=parameter1:parameter2:...],filter2,...>',
    '--audio-spdif=<codecs>',
    '--ad=<decoder1,decoder2,...[-]>',
    '--ad=mp3float',
    '--ad=help',
    '--volume=<value>',
    '--replaygain=<no|track|album>',
    '--replaygain-preamp=<db>',
    '--replaygain-clip=<yes|no>',
    '--replaygain-fallback=<db>',
    '--balance=<value>',
    '--audio-delay=<sec>',
    '--mute=<yes|no|auto>',
    '--softvol=<no|yes|auto>',
    '--audio-demuxer=<[+]name>',
    '--ad-lavc-ac3drc=<level>',
    '--ad-lavc-downmix=<yes|no>',
    '--ad-lavc-threads=<0-16>',
    '--ad-lavc-o=<key>=<value>[,<key>=<value>[,...]]',
    '--ad-spdif-dtshd=<yes|no>',
    '--audio-channels=<auto-safe|auto|layouts>',
    '--audio-channels=auto-safe',
    '--audio-channels=auto',
    '--audio-channels=layout1,layout2,...',
    '--audio-channels=stereo',
    '--audio-normalize-downmix=<yes|no>',
    '--audio-display=<no|attachment>',
    '--audio-files=<files>',
    '--audio-file=<file>',
    '--audio-format=<format>',
    '--audio-samplerate=<Hz>',
    '--gapless-audio=<no|yes|weak>',
    '--initial-audio-sync',
    '--volume-max=<100.0-1000.0>',
    '--audio-file-auto=<no|exact|fuzzy|all>',
    '--audio-file-paths=<path1:path2:...>',
    '--audio-client-name=<name>',
    '--audio-buffer=<seconds>',
    '--audio-stream-silence=<yes|no>',
    '--audio-wait-open=<secs>',
    '--sub-demuxer=<[+]name>',
    '--sub-delay=<sec>',
    '--sub-files=<file-list>',
    '--secondary-sid=<ID|auto|no>',
    '--sub-scale=<0-100>',
    '--sub-scale-by-window=<yes|no>',
    '--sub-scale-with-window=<yes|no>',
    '--sub-ass-scale-with-window=<yes|no>',
    '--embeddedfonts',
    '--sub-pos=<0-100>',
    '--sub-speed=<0.1-10.0>',
    '--sub-ass',
    '--sub-auto=<no|exact|fuzzy|all>',
    '--sub-codepage=<codepage>',
    '--sub-fix-timing=<yes|no>',
    '--sub-forced-only',
    '--sub-fps=<rate>',
    '--sub-gauss=<0.0-3.0>',
    '--sub-gray',
    '--sub-paths=<path1:path2:...>',
    '--sub-file-paths=<path-list>',
    '--sub-visibility',
    '--sub-clear-on-seek',
    '--teletext-page=<1-999>',
    '--sub-font=<name>',
    '--sub-font-size=<size>',
    '--sub-back-color=<color>',
    '--sub-blur=<0..20.0>',
    '--sub-bold=<yes|no>',
    '--sub-italic=<yes|no>',
    '--sub-border-color=<color>',
    '--sub-border-size=<size>',
    '--sub-color=<color>',
    '--sub-margin-x=<size>',
    '--sub-margin-y=<size>',
    '--sub-align-x=<left|center|right>',
    '--sub-align-y=<top|center|bottom>',
    '--sub-justify=<auto|left|center|right>',
    '--sub-ass-justify=<yes|no>',
    '--sub-shadow-color=<color>',
    '--sub-shadow-offset=<size>',
    '--sub-spacing=<size>',
    '--sub-filter-sdh=<yes|no>',
    '--sub-filter-sdh-harder=<yes|no>',
    '--title=<string>',
    '--screen=<default|0-32>',
    '--fullscreen',
    '--fs-screen=<all|current|0-32>',
    '--keep-open=<yes|no|always>',
    '--keep-open-pause=<yes|no>',
    '--image-display-duration=<seconds|inf>',
    '--force-window=<yes|no|immediate>',
    '--taskbar-progress',
    '--snap-window',
    '--ontop',
    '--ontop-level=<window|system|level>',
    '--border',
    '--fit-border',
    '--on-all-workspaces',
    '--geometry=<[W[xH]][+-x+-y]>',
    '--autofit=<[W[xH]]>',
    '--autofit-larger=<[W[xH]]>',
    '--autofit-smaller=<[W[xH]]>',
    '--window-scale=<factor>',
    '--cursor-autohide=<number|no|always>',
    '--cursor-autohide-fs-only',
    '--no-fixed-vo',
    '--force-rgba-osd-rendering',
    '--force-window-position',
    '--no-keepaspect',
    '--no-keepaspect-window',
    '--monitoraspect=<ratio>',
    '--hidpi-window-scale',
    '--native-fs',
    '--monitorpixelaspect=<ratio>',
    '--stop-screensaver',
    '--wid=<ID>',
    '--no-window-dragging',
    '--x11-name',
    '--x11-netwm=<yes|no|auto>',
    '--x11-bypass-compositor=<yes|no|fs-only|never>',
    '--cdrom-device=<path>',
    '--dvd-device=<path>',
    '--bluray-device=<path>',
    '--dvd-speed=<speed>',
    '--dvd-angle=<ID>',
    '--brightness=<-100-100>',
    '--contrast=<-100-100>',
    '--saturation=<-100-100>',
    '--gamma=<-100-100>',
    '--hue=<-100-100>',
    '--demuxer=<[+]name>',
    '--prefetch-playlist=<yes|no>',
    '--force-seekable=<yes|no>',
    '--native-keyrepeat',
    '--input-ar-delay',
    '--input-ar-rate',
    '--input-conf=<filename>',
    '--no-input-default-bindings',
    '--input-cmdlist',
    '--input-doubleclick-time=<milliseconds>',
    '--input-keylist',
    '--input-key-fifo-size=<2-65000>',
    '--input-test',
    '--input-file=<filename>',
    '--input-terminal',
    '--input-ipc-server=<filename>',
    '--input-appleremote=<yes|no>',
    '--input-cursor',
    '--input-media-keys=<yes|no>',
    '--input-right-alt-gr',
    '--input-vo-keyboard=<yes|no>',
    '--osc',
    '--no-osd-bar',
    '--osd-duration=<time>',
    '--osd-font=<name>',
    '--osd-font-size=<size>',
    '--osd-msg1=<string>',
    '--osd-msg2=<string>',
    '--osd-msg3=<string>',
    '--osd-status-msg=<string>',
    '--osd-playing-msg=<string>',
    '--osd-bar-align-x=<-1-1>',
    '--osd-bar-align-y=<-1-1>',
    '--osd-bar-w=<1-100>',
    '--osd-bar-h=<0.1-50>',
    '--osd-back-color=<color>',
    '--osd-blur=<0..20.0>',
    '--osd-bold=<yes|no>',
    '--osd-italic=<yes|no>',
    '--osd-border-color=<color>',
    '--osd-border-size=<size>',
    '--osd-color=<color>',
    '--osd-fractions',
    '--osd-level=<0-3>',
    '--osd-margin-x=<size>',
    '--osd-margin-y=<size>',
    '--osd-align-x=<left|center|right>',
    '--osd-align-y=<top|center|bottom>',
    '--osd-scale=<factor>',
    '--osd-scale-by-window=<yes|no>',
    '--osd-shadow-color=<color>',
    '--osd-shadow-offset=<size>',
    '--osd-spacing=<size>',
    '--video-osd=<yes|no>',
    '--screenshot-format=<type>',
    '--screenshot-tag-colorspace=<yes|no>',
    '--screenshot-high-bit-depth=<yes|no>',
    '--screenshot-template=<template>',
    '--screenshot-directory=<path>',
    '--screenshot-jpeg-quality=<0-100>',
    '--screenshot-jpeg-source-chroma=<yes|no>',
    '--screenshot-png-compression=<0-9>',
    '--screenshot-png-filter=<0-5>',
    '--sws-scaler=<name>',
    '--sws-lgb=<0-100>',
    '--sws-cgb=<0-100>',
    '--sws-ls=<-100-100>',
    '--sws-cs=<-100-100>',
    '--sws-chs=<h>',
    '--sws-cvs=<v>',
    '--quiet',
    '--really-quiet',
    '--no-terminal',
    '--no-msg-color',
    '--msg-level=<module1=level1,module2=level2,...>',
    '--term-osd=<auto|no|force>',
    '--term-osd-bar',
    '--term-osd-bar-chars=<string>',
    '--term-playing-msg=<string>',
    '--term-status-msg=<string>',
    '--msg-module',
    '--msg-time',
    '--cache=<kBytes|yes|no|auto>',
    '--cache-default=<kBytes|no>',
    '--cache-initial=<kBytes>',
    '--cache-seek-min=<kBytes>',
    '--cache-backbuffer=<kBytes>',
    '--cache-file=<TMP|path>',
    '--cache-file-size=<kBytes>',
    '--no-cache',
    '--cache-secs=<seconds>',
    '--cache-pause',
    '--user-agent=<string>',
    '--cookies',
    '--cookies-file=<filename>',
    '--http-header-fields=<field1,field2>',
    '--tls-ca-file=<filename>',
    '--tls-verify',
    '--tls-cert-file',
    '--tls-key-file',
    '--referrer=<string>',
    '--network-timeout=<seconds>',
    '--rtsp-transport=<lavf|udp|tcp|http>',
    '--hls-bitrate=<no|min|max|<rate>>',
    '--alsa-device=<device>',
    '--alsa-resample=yes',
    '--alsa-mixer-device=<device>',
    '--alsa-mixer-name=<name>',
    '--alsa-mixer-index=<number>',
    '--alsa-non-interleaved',
    '--alsa-ignore-chmap',
    '--scale=<filter>',
    '--cscale=<filter>',
    '--dscale=<filter>',
    '--tscale=<filter>',
    '--scale-param1=<value>',
    '--scale-blur=<value>',
    '--scale-clamp=<0.0-1.0>',
    '--scale-cutoff=<value>',
    '--scale-taper=<value>',
    '--scale-radius=<value>',
    '--scale-antiring=<value>',
    '--scale-window=<window>',
    '--scale-wparam=<window>',
    '--scaler-lut-size=<4..10>',
    '--scaler-resizes-only',
    '--linear-scaling',
    '--correct-downscaling',
    '--interpolation',
    '--interpolation-threshold=<0..1,-1>',
    '--opengl-pbo',
    '--dither-depth=<N|no|auto>',
    '--dither-size-fruit=<2-8>',
    '--dither=<fruit|ordered|no>',
    '--temporal-dither',
    '--temporal-dither-period=<1-128>',
    '--gpu-debug',
    '--opengl-swapinterval=<n>',
    '--vulkan-swap-mode=<mode>',
    '--vulkan-queue-count=<1..8>',
    '--spirv-compiler=<compiler>',
    '--glsl-shaders=<file-list>',
    '--glsl-shader=<file>',
    '--deband',
    '--deband-iterations=<1..16>',
    '--deband-threshold=<0..4096>',
    '--deband-range=<1..64>',
    '--deband-grain=<0..4096>',
    '--sigmoid-upscaling',
    '--sigmoid-center',
    '--sigmoid-slope',
    '--sharpen=<value>',
    '--opengl-glfinish',
    '--opengl-waitvsync',
    '--opengl-dwmflush=<no|windowed|yes|auto>',
    '--angle-d3d11-feature-level=<11_0|10_1|10_0|9_3>',
    '--angle-d3d11-warp=<yes|no|auto>',
    '--angle-egl-windowing=<yes|no|auto>',
    '--angle-flip=<yes|no>',
    '--angle-renderer=<d3d9|d3d11|auto>',
    '--cocoa-force-dedicated-gpu=<yes|no>',
    '--swapchain-depth=<N>',
    '--gpu-sw',
    '--gpu-context=<sys>',
    '--gpu-api=<type>',
    '--opengl-es=<mode>',
    '--opengl-restrict=<version>',
    '--fbo-format=<fmt>',
    '--gamma-factor=<0.1..2.0>',
    '--gamma-auto',
    '--target-prim=<value>',
    '--target-trc=<value>',
    '--tone-mapping=<value>',
    '--tone-mapping-param=<value>',
    '--hdr-compute-peak',
    '--tone-mapping-desaturate=<value>',
    '--gamut-warning',
    '--use-embedded-icc-profile',
    '--icc-profile=<file>',
    '--icc-profile-auto',
    '--icc-cache-dir=<dirname>',
    '--icc-intent=<value>',
    '--icc-3dlut-size=<r>x<g>x<b>',
    '--icc-contrast=<0-100000>',
    '--blend-subtitles=<yes|video|no>',
    '--alpha=<blend-tiles|blend|yes|no>',
    '--opengl-rectangle-textures',
    '--background=<color>',
    '--gpu-tex-pad-x',
    '--opengl-early-flush=<yes|no|auto>',
    '--gpu-dumb-mode=<yes|no|auto>',
    '--gpu-shader-cache-dir=<dirname>',
    '--cuda-decode-device=<auto|0..>',
    '--display-tags=tag1,tags2,...',
    '--mc=<seconds/frame>',
    '--autosync=<factor>',
    '--video-sync=<audio|...>',
    '--video-sync-max-video-change=<value>',
    '--video-sync-max-audio-change=<value>',
    '--video-sync-adrop-size=<value>',
    '--mf-fps=<value>',
    '--mf-type=<value>',
    '--stream-dump=<destination-filename>',
    '--stream-lavf-o=opt1=value1,opt2=value2,...',
    '--vo-mmcss-profile=<name>',
    '--priority=<prio>',
    '--force-media-title=<string>',
    '--external-files=<file-list>',
    '--external-file=<file>',
    '--autoload-files=<yes|no>',
    '--record-file=<file>',
    '--lavfi-complex=<string>',
    '--ao=<driver1,driver2,...[,]>',
    '--oss-mixer-device',
    '--oss-mixer-channel',
    '--jack-port=<name>',
    '--jack-name=<client>',
    '--jack-autostart=<yes|no>',
    '--jack-connect=<yes|no>',
    '--jack-std-channel-layout=<waveext|any>',
    '--coreaudio-change-physical-format=<yes|no>',
    '--coreaudio-spdif-hack=<yes|no>',
    '--pulse-host=<host>',
    '--pulse-buffer=<1-2000|native>',
    '--pulse-latency-hacks=<yes|no>',
    '--sdl-buflen=<length>',
    '--sdl-bufcnt=<count>',
    '--vo=<driver1,driver2,...[,]>',
    '--xv-adaptor=<number>',
    '--xv-port=<number>',
    '--xv-ck=<cur|use|set>',
    '--xv-ck-method=<none|man|bg|auto>',
    '--xv-colorkey=<number>',
    '--xv-buffers=<number>',
    '--vo-vdpau-sharpen=<-1-1>',
    '--vo-vdpau-denoise=<0-1>',
    '--vo-vdpau-deint=<-4-4>',
    '--vo-vdpau-chroma-deint',
    '--vo-vdpau-pullup',
    '--vo-vdpau-hqscaling=<0-9>',
    '--vo-vdpau-fps=<number>',
    '--vo-vdpau-composite-detect',
    '--vo-vdpau-queuetime-windowed=<number>',
    '--vo-vdpau-output-surfaces=<2-15>',
    '--vo-vdpau-colorkey=<#RRGGBB|#AARRGGBB>',
    '--vo-vdpau-force-yuv',
    '--vo-direct3d-prefer-stretchrect',
    '--vo-direct3d-disable-stretchrect',
    '--vo-direct3d-disable-textures',
    '--vo-direct3d-disable-shaders',
    '--vo-direct3d-only-8bit',
    '--vo-direct3d-disable-texture-align',
    '--vo-direct3d-force-power-of-2',
    '--vo-direct3d-texture-memory=<mode>',
    '--vo-direct3d-swap-discard',
    '--vo-direct3d-exact-backbuffer',
    '--sdl-sw',
    '--sdl-switch-mode',
    '--vo-vaapi-scaling=<algorithm>',
    '--vo-vaapi-deint-mode=<mode>',
    '--vo-vaapi-scaled-osd=<yes|no>',
    '--vo-null-fps=<value>',
    '--vo-tct-algo=<algo>',
    '--vo-tct-width=<width>',
    '--vo-tct-256=<yes|no>',
    '--vo-image-format=<format>',
    '--vo-image-png-compression=<0-9>',
    '--vo-image-png-filter=<0-5>',
    '--vo-image-jpeg-quality=<0-100>',
    '--vo-image-jpeg-optimize=<0-100>',
    '--vo-image-outdir=<dirname>',
    '--vo-wayland-alpha',
    '--vo-wayland-rgb565',
    '--vo-wayland-triple-buffering',
    '--rpi-display=<number>',
    '--rpi-layer=<number>',
    '--rpi-background=<yes|no>',
    '--rpi-osd=<yes|no>',
    '--drm-connector=[<gpu_number>.]<name>',
    '--drm-mode=<number>',
    '--af=<...>',
    '--vf=<filter1[=parameter1:parameter2:...],filter2,...>',
    '--vf-defaults=<filter1[=parameter1:parameter2:...],filter2,...>',
    '--vf-add=<filter1[,filter2,...]>',
    '--vf-pre=<filter1[,filter2,...]>',
    '--vf-del=<index1[,index2,...]>',
    '--vf-clr',
    '--vf=<filter>=help',
    '--vf=<filter=named_parameter1=value1[:named_parameter2=value2:...]>',
    '--vf=sub,eq',
    '--o=<filename>',
    '--of=<format>',
    '--ofopts=<options>',
    '--ofopts-add=<options1[,options2,...]>',
    '--ofopts-pre=<options1[,options2,...]>',
    '--ofopts-del=<index1[,index2,...]>',
    '--ofopts-clr',
    '--ofps=<value>',
    '--oautofps',
    '--omaxfps=<value>',
    '--oharddup',
    '--oneverdrop',
    '--oac=<codec>',
    '--oaoffset=<value>',
    '--oacopts=<options>',
    '--oacopts-add=<options1[,options2,...]>',
    '--oacopts-pre=<options1[,options2,...]>',
    '--oacopts-del=<index1[,index2,...]>',
    '--oacopts-clr',
    '--oafirst',
    '--ovc=<codec>',
    '--ovoffset=<value>',
    '--ovcopts=<options>',
    '--ovcopts-add=<options1[,options2,...]>',
    '--ovcopts-pre=<options1[,options2,...]>',
    '--ovcopts-del=<index1[,index2,...]>',
    '--ovcopts-clr',
    '--ovfirst',
    '--ocopyts',
    '--orawts',
    '--no-ometadata'
  ],
  vlc: [
    '--audio',
    '--no-audio',
    '--spdif',
    '--no-spdif',
    '--force-dolby-surround <0|1|2>',
    '--audio-replay-gain-mode <none|track|album>',
    '--audio-replay-gain-preamp <float>',
    '--audio-replay-gain-default <float>',
    '--audio-time-stretch',
    '--no-audio-time-stretch',
    '--audio-filter <string>',
    '--audio-visual <string>',
    '--fullscreen',
    '--no-fullscreen',
    '--overlay',
    '--no-overlay',
    '--video-on-top',
    '--no-video-on-top',
    '--video-wallpaper',
    '--no-video-wallpaper',
    '--video-title-show',
    '--no-video-title-show',
    '--video-title-timeout <integer>',
    '--video-title-position <0-10>',
    '--mouse-hide-timeout <integer>',
    '--snapshot-path <string>',
    '--snapshot-prefix <string>',
    '--snapshot-format <png|jpg|tiff>',
    '--snapshot-preview',
    '--no-snapshot-preview',
    '--snapshot-sequential',
    '--no-snapshot-sequential',
    '--crop <string>',
    '--custom-crop-ratios <string>',
    '--aspect-ratio <string>',
    '--autoscale',
    '--no-autoscale',
    '--scale <float>',
    '--custom-aspect-ratios <string>',
    '--deinterlace <0|-1|1>',
    '--deinterlace-mode <discard|blend|mean|bob|linear|x|yadif|yadif2x|phosphor|ivtc>',
    '--video-filter <string>',
    '--video-splitter <string>',
    '--spu',
    '--no-spu',
    '--osd',
    '--no-osd',
    '--sub-file <string>',
    '--sub-autodetect-file',
    '--no-sub-autodetect-file',
    '--sub-source <string>',
    '--sub-filter <string>',
    '--audio-language <string>',
    '--sub-language <string>',
    '--menu-language <string>',
    '--preferred-resolution <-1|1080|720|576|360|240>',
    '--input-repeat <integer>',
    '--input-fast-seek',
    '--no-input-fast-seek',
    '--rate <float>',
    '--dvd <string>',
    '--vcd <string>',
    '--cd-audio <string>',
    '--input-title-format <string>',
    '--stream-filter <string>',
    '--random',
    '--no-random',
    '--loop',
    '--no-loop',
    '--repeat',
    '--no-repeat',
    '--play-and-exit',
    '--no-play-and-exit',
    '--play-and-stop',
    '--no-play-and-stop',
    '--playlist-autostart',
    '--no-playlist-autostart',
    '--playlist-cork',
    '--no-playlist-cork',
    '--media-library',
    '--no-media-library',
    '--playlist-tree',
    '--no-playlist-tree',
    '--open <string>',
    '--auto-preparse',
    '--no-auto-preparse',
    '--metadata-network-access',
    '--no-metadata-network-access',
    '--verbose <integer>',
    '--quiet',
    '--no-quiet',
    '--pidfile <string>',
    '--advanced',
    '--no-advanced',
    '--interact',
    '--no-interact',
    '--intf <string>',
    '--extraintf <string>',
    '--control <string>',
    '--hotkeys-mousewheel-mode <2|0|1>',
    '--global-key-toggle-fullscreen <string>',
    '--key-toggle-fullscreen <string>',
    '--global-key-leave-fullscreen <string>',
    '--key-leave-fullscreen <string>',
    '--global-key-play-pause <string>',
    '--key-play-pause <string>',
    '--global-key-faster <string>',
    '--key-faster <string>',
    '--global-key-slower <string>',
    '--key-slower <string>',
    '--global-key-rate-normal <string>',
    '--key-rate-normal <string>',
    '--global-key-rate-faster-fine <string>',
    '--key-rate-faster-fine <string>',
    '--global-key-rate-slower-fine <string>',
    '--key-rate-slower-fine <string>',
    '--global-key-next <string>',
    '--key-next <string>',
    '--global-key-prev <string>',
    '--key-prev <string>',
    '--global-key-stop <string>',
    '--key-stop <string>',
    '--global-key-jump-extrashort <string>',
    '--key-jump-extrashort <string>',
    '--global-key-jump+extrashort <string>',
    '--key-jump+extrashort <string>',
    '--global-key-jump-short <string>',
    '--key-jump-short <string>',
    '--global-key-jump+short <string>',
    '--key-jump+short <string>',
    '--global-key-jump-medium <string>',
    '--key-jump-medium <string>',
    '--global-key-jump+medium <string>',
    '--key-jump+medium <string>',
    '--global-key-jump-long <string>',
    '--key-jump-long <string>',
    '--global-key-jump+long <string>',
    '--key-jump+long <string>',
    '--global-key-frame-next <string>',
    '--key-frame-next <string>',
    '--global-key-quit <string>',
    '--key-quit <string>',
    '--global-key-vol-up <string>',
    '--key-vol-up <string>',
    '--global-key-vol-down <string>',
    '--key-vol-down <string>',
    '--global-key-vol-mute <string>',
    '--key-vol-mute <string>',
    '--global-key-audio-track <string>',
    '--key-audio-track <string>',
    '--global-key-audiodevice-cycle <string>',
    '--key-audiodevice-cycle <string>',
    '--global-key-subtitle-track <string>',
    '--key-subtitle-track <string>',
    '--global-key-subtitle-toggle <string>',
    '--key-subtitle-toggle <string>',
    '--global-key-program-sid-next <string>',
    '--key-program-sid-next <string>',
    '--global-key-program-sid-prev <string>',
    '--key-program-sid-prev <string>',
    '--global-key-aspect-ratio <string>',
    '--key-aspect-ratio <string>',
    '--global-key-crop <string>',
    '--key-crop <string>',
    '--global-key-toggle-autoscale <string>',
    '--key-toggle-autoscale <string>',
    '--global-key-incr-scalefactor <string>',
    '--key-incr-scalefactor <string>',
    '--global-key-decr-scalefactor <string>',
    '--key-decr-scalefactor <string>',
    '--global-key-deinterlace <string>',
    '--key-deinterlace <string>',
    '--global-key-deinterlace-mode <string>',
    '--key-deinterlace-mode <string>',
    '--global-key-intf-show <string>',
    '--key-intf-show <string>',
    '--global-key-wallpaper <string>',
    '--key-wallpaper <string>',
    '--global-key-random <string>',
    '--key-random <string>',
    '--global-key-loop <Normal|Loop|Repeat>',
    '--key-loop <string>',
    '--global-key-zoom-quarter <string>',
    '--key-zoom-quarter <string>',
    '--global-key-zoom-half <string>',
    '--key-zoom-half <string>',
    '--global-key-zoom-original <string>',
    '--key-zoom-original <string>',
    '--global-key-zoom-double <string>',
    '--key-zoom-double <2:1|Double>',
    '--extrashort-jump-size <integer>',
    '--short-jump-size <integer>',
    '--medium-jump-size <integer>',
    '--long-jump-size <integer>',
    '--bookmark1 <string>',
    '--bookmark2 <string>',
    '--bookmark3 <string>',
    '--bookmark4 <string>',
    '--bookmark5 <string>',
    '--bookmark6 <string>',
    '--bookmark7 <string>',
    '--bookmark8 <string>',
    '--bookmark9 <string>',
    '--bookmark10 <string>',
    '--list',
    '--no-list',
    '--list-verbose',
    '--no-list-verbose',
    '--module <string>',
    '--ignore-config',
    '--no-ignore-config',
    '--reset-config',
    '--no-reset-config',
    '--reset-plugins-cache',
    '--no-reset-plugins-cache',
    '--config <string>'
  ],
  'youtube-dl': [
    '--help',
    '--version',
    '--update',
    '--ignore-errors',
    '--abort-on-error',
    '--dump-user-agent',
    '--list-extractors',
    '--extractor-descriptions',
    '--force-generic-extractor',
    '--default-search <prefix>',
    '--ignore-config',
    '--config-location <path>',
    '--flat-playlist',
    '--mark-watched',
    '--no-mark-watched',
    '--no-color',
    '--proxy <url>',
    '--socket-timeout <seconds>',
    '--source-address <ip>',
    '--force-ipv4',
    '--force-ipv6',
    '--geo-verification-proxy <url>',
    '--geo-bypass',
    '--no-geo-bypass',
    '--geo-bypass-country <code>',
    '--playlist-start <number>',
    '--playlist-end <number>',
    '--playlist-items <item_spec>',
    '--match-title <regex>',
    '--reject-title <regex>',
    '--max-downloads <number>',
    '--min-filesize <size>',
    '--max-filesize <size>',
    '--date <date>',
    '--datebefore <date>',
    '--dateafter <date>',
    '--min-views <count>',
    '--max-views <count>',
    '--match-filter <filter>',
    '--no-playlist',
    '--yes-playlist',
    '--age-limit <years>',
    '--download-archive <file>',
    '--include-ads',
    '--limit-rate <rate>',
    '--retries <retries>',
    '--fragment-retries <retries>',
    '--skip-unavailable-fragments',
    '--abort-on-unavailable-fragment',
    '--keep-fragments',
    '--buffer-size <size>',
    '--no-resize-buffer',
    '--playlist-reverse',
    '--playlist-random',
    '--xattr-set-filesize',
    '--hls-prefer-native',
    '--hls-prefer-ffmpeg',
    '--hls-use-mpegts',
    '--external-downloader <command>',
    '--external-downloader-args <args>',
    '--batch-file <file>',
    '--id',
    '--output "&lt;template>"',
    '--autonumber-start <number>',
    '--restrict-filenames',
    '--no-overwrites',
    '--continue',
    '--no-continue',
    '--no-part',
    '--no-mtime',
    '--write-description',
    '--write-info-json',
    '--write-annotations',
    '--load-info-json <file>',
    '--cookies <file>',
    '--cache-dir <dir>',
    '--no-cache-dir',
    '--rm-cache-dir',
    '--write-thumbnail',
    '--write-all-thumbnails',
    '--list-thumbnails',
    '--dump-json',
    '--dump-single-json',
    '--print-json',
    '--newline',
    '--no-progress',
    '--console-title',
    '--verbose',
    '--dump-pages',
    '--write-pages',
    '--print-traffic',
    '--call-home',
    '--no-call-home',
    '--encoding <encoding>',
    '--no-check-certificate',
    '--prefer-insecure',
    '--user-agent <ua>',
    '--referer <url>',
    '--add-header <field:value>',
    '--bidi-workaround',
    '--sleep-interval <seconds>',
    '--max-sleep-interval <seconds>',
    '--format <format>',
    '--all-formats',
    '--prefer-free-formats',
    '--list-formats',
    '--youtube-skip-dash-manifest',
    '--merge-output-format <format>',
    '--write-sub',
    '--write-auto-sub',
    '--all-subs',
    '--list-subs',
    '--sub-format <format>',
    '--sub-lang <langs>',
    '--username <username>',
    '--password <password>',
    '--twofactor <twofactor>',
    '--netrc',
    '--video-password <password>',
    '--ap-mso <mso>',
    '--ap-username <username>',
    '--ap-password <password>',
    '--ap-list-mso',
    '--extract-audio',
    '--audio-format <format>',
    '--audio-quality <quality>',
    '--recode-video <format>',
    '--postprocessor-args <args>',
    '--keep-video',
    '--no-post-overwrites',
    '--embed-subs',
    '--embed-thumbnail',
    '--add-metadata',
    '--metadata-from-title <format>',
    '--xattrs',
    '--fixup <policy>',
    '--prefer-avconv',
    '--prefer-ffmpeg',
    '--ffmpeg-location <path>',
    '--exec <cmd>',
    '--convert-subs <format>'
  ]
}
