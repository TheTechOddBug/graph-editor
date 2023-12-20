export function getGhActionIcon(icon: string): string | undefined {
    return ghActionIcons.get(icon);
}

const ghActionIcons = new Map<string, string>([
    ["activity", "featherActivity"],
    ["airplay", "featherAirplay"],
    ["alert-circle", "featherAlertCircle"],
    ["alert-octagon", "featherAlertOctagon"],
    ["alert-triangle", "featherAlertTriangle"],
    ["align-center", "featherAlignCenter"],
    ["align-justify", "featherAlignJustify"],
    ["align-left", "featherAlignLeft"],
    ["align-right", "featherAlignRight"],
    ["anchor", "featherAnchor"],
    ["aperture", "featherAperture"],
    ["archive", "featherArchive"],
    ["arrow-down-circle", "featherArrowDownCircle"],
    ["arrow-down-left", "featherArrowDownLeft"],
    ["arrow-down-right", "featherArrowDownRight"],
    ["arrow-down", "featherArrowDown"],
    ["arrow-left-circle", "featherArrowLeftCircle"],
    ["arrow-left", "featherArrowLeft"],
    ["arrow-right-circle", "featherArrowRightCircle"],
    ["arrow-right", "featherArrowRight"],
    ["arrow-up-circle", "featherArrowUpCircle"],
    ["arrow-up-left", "featherArrowUpLeft"],
    ["arrow-up-right", "featherArrowUpRight"],
    ["arrow-up", "featherArrowUp"],
    ["at-sign", "featherAtSign"],
    ["award", "featherAward"],
    ["bar-chart-2", "featherBarChart2"],
    ["bar-chart", "featherBarChart"],
    ["battery-charging", "featherBatteryCharging"],
    ["battery", "featherBattery"],
    ["bell-off", "featherBellOff"],
    ["bell", "featherBell"],
    ["bluetooth", "featherBluetooth"],
    ["bold", "featherBold"],
    ["book-open", "featherBookOpen"],
    ["book", "featherBook"],
    ["bookmark", "featherBookmark"],
    ["box", "featherBox"],
    ["briefcase", "featherBriefcase"],
    ["calendar", "featherCalendar"],
    ["camera-off", "featherCameraOff"],
    ["camera", "featherCamera"],
    ["cast", "featherCast"],
    ["check-circle", "featherCheckCircle"],
    ["check-square", "featherCheckSquare"],
    ["check", "featherCheck"],
    ["chevron-down", "featherChevronDown"],
    ["chevron-left", "featherChevronLeft"],
    ["chevron-right", "featherChevronRight"],
    ["chevron-up", "featherChevronUp"],
    ["chevrons-down", "featherChevronsDown"],
    ["chevrons-left", "featherChevronsLeft"],
    ["chevrons-right", "featherChevronsRight"],
    ["chevrons-up", "featherChevronsUp"],
    ["circle", "featherCircle"],
    ["clipboard", "featherClipboard"],
    ["clock", "featherClock"],
    ["cloud-drizzle", "featherCloudDrizzle"],
    ["cloud-lightning", "featherCloudLightning"],
    ["cloud-off", "featherCloudOff"],
    ["cloud-rain", "featherCloudRain"],
    ["cloud-snow", "featherCloudSnow"],
    ["cloud", "featherCloud"],
    ["code", "featherCode"],
    ["command", "featherCommand"],
    ["compass", "featherCompass"],
    ["copy", "featherCopy"],
    ["corner-down-left", "featherCornerDownLeft"],
    ["corner-down-right", "featherCornerDownRight"],
    ["corner-left-down", "featherCornerLeftDown"],
    ["corner-left-up", "featherCornerLeftUp"],
    ["corner-right-down", "featherCornerRightDown"],
    ["corner-right-up", "featherCornerRightUp"],
    ["corner-up-left", "featherCornerUpLeft"],
    ["corner-up-right", "featherCornerUpRight"],
    ["cpu", "featherCpu"],
    ["credit-card", "featherCreditCard"],
    ["crop", "featherCrop"],
    ["crosshair", "featherCrosshair"],
    ["database", "featherDatabase"],
    ["delete", "featherDelete"],
    ["disc", "featherDisc"],
    ["dollar-sign", "featherDollarSign"],
    ["download-cloud", "featherDownloadCloud"],
    ["download", "featherDownload"],
    ["droplet", "featherDroplet"],
    ["edit-2", "featherEdit2"],
    ["edit-3", "featherEdit3"],
    ["edit", "featherEdit"],
    ["external-link", "featherExternalLink"],
    ["eye-off", "featherEyeOff"],
    ["eye", "featherEye"],
    ["fast-forward", "featherFastForward"],
    ["feather", "featherFeather"],
    ["file-minus", "featherFileMinus"],
    ["file-plus", "featherFilePlus"],
    ["file-text", "featherFileText"],
    ["file", "featherFile"],
    ["film", "featherFilm"],
    ["filter", "featherFilter"],
    ["flag", "featherFlag"],
    ["folder-minus", "featherFolderMinus"],
    ["folder-plus", "featherFolderPlus"],
    ["folder", "featherFolder"],
    ["gift", "featherGift"],
    ["git-branch", "featherGitBranch"],
    ["git-commit", "featherGitCommit"],
    ["git-merge", "featherGitMerge"],
    ["git-pull-request", "featherGitPullRequest"],
    ["globe", "featherGlobe"],
    ["grid", "featherGrid"],
    ["hard-drive", "featherHardDrive"],
    ["hash", "featherHash"],
    ["headphones", "featherHeadphones"],
    ["heart", "featherHeart"],
    ["help-circle", "featherHelpCircle"],
    ["home", "featherHome"],
    ["image", "featherImage"],
    ["inbox", "featherInbox"],
    ["info", "featherInfo"],
    ["italic", "featherItalic"],
    ["layers", "featherLayers"],
    ["layout", "featherLayout"],
    ["life-buoy", "featherLifeBuoy"],
    ["link-2", "featherLink2"],
    ["link", "featherLink"],
    ["list", "featherList"],
    ["loader", "featherLoader"],
    ["lock", "featherLock"],
    ["log-in", "featherLogIn"],
    ["log-out", "featherLogOut"],
    ["mail", "featherMail"],
    ["map-pin", "featherMapPin"],
    ["map", "featherMap"],
    ["maximize-2", "featherMaximize2"],
    ["maximize", "featherMaximize"],
    ["menu", "featherMenu"],
    ["message-circle", "featherMessageCircle"],
    ["message-square", "featherMessageSquare"],
    ["mic-off", "featherMicOff"],
    ["mic", "featherMic"],
    ["minimize-2", "featherMinimize2"],
    ["minimize", "featherMinimize"],
    ["minus-circle", "featherMinusCircle"],
    ["minus-square", "featherMinusSquare"],
    ["minus", "featherMinus"],
    ["monitor", "featherMonitor"],
    ["moon", "featherMoon"],
    ["more-horizontal", "featherMoreHorizontal"],
    ["more-vertical", "featherMoreVertical"],
    ["move", "featherMove"],
    ["music", "featherMusic"],
    ["navigation-2", "featherNavigation2"],
    ["navigation", "featherNavigation"],
    ["octagon", "featherOctagon"],
    ["package", "featherPackage"],
    ["paperclip", "featherPaperclip"],
    ["pause-circle", "featherPauseCircle"],
    ["pause", "featherPause"],
    ["percent", "featherPercent"],
    ["phone-call", "featherPhoneCall"],
    ["phone-forwarded", "featherPhoneForwarded"],
    ["phone-incoming", "featherPhoneIncoming"],
    ["phone-missed", "featherPhoneMissed"],
    ["phone-off", "featherPhoneOff"],
    ["phone-outgoing", "featherPhoneOutgoing"],
    ["phone", "featherPhone"],
    ["pie-chart", "featherPieChart"],
    ["play-circle", "featherPlayCircle"],
    ["play", "featherPlay"],
    ["plus-circle", "featherPlusCircle"],
    ["plus-square", "featherPlusSquare"],
    ["plus", "featherPlus"],
    ["pocket", "featherPocket"],
    ["power", "featherPower"],
    ["printer", "featherPrinter"],
    ["radio", "featherRadio"],
    ["refresh-ccw", "featherRefreshCcw"],
    ["refresh-cw", "featherRefreshCw"],
    ["repeat", "featherRepeat"],
    ["rewind", "featherRewind"],
    ["rotate-ccw", "featherRotateCcw"],
    ["rotate-cw", "featherRotateCw"],
    ["rss", "featherRss"],
    ["save", "featherSave"],
    ["scissors", "featherScissors"],
    ["search", "featherSearch"],
    ["send", "featherSend"],
    ["server", "featherServer"],
    ["settings", "featherSettings"],
    ["share-2", "featherShare2"],
    ["share", "featherShare"],
    ["shield-off", "featherShieldOff"],
    ["shield", "featherShield"],
    ["shopping-bag", "featherShoppingBag"],
    ["shopping-cart", "featherShoppingCart"],
    ["shuffle", "featherShuffle"],
    ["sidebar", "featherSidebar"],
    ["skip-back", "featherSkipBack"],
    ["skip-forward", "featherSkipForward"],
    ["slash", "featherSlash"],
    ["sliders", "featherSliders"],
    ["smartphone", "featherSmartphone"],
    ["speaker", "featherSpeaker"],
    ["square", "featherSquare"],
    ["star", "featherStar"],
    ["stop-circle", "featherStopCircle"],
    ["sun", "featherSun"],
    ["sunrise", "featherSunrise"],
    ["sunset", "featherSunset"],
    ["tablet", "featherTablet"],
    ["tag", "featherTag"],
    ["target", "featherTarget"],
    ["terminal", "featherTerminal"],
    ["thermometer", "featherThermometer"],
    ["thumbs-down", "featherThumbsDown"],
    ["thumbs-up", "featherThumbsUp"],
    ["toggle-left", "featherToggleLeft"],
    ["toggle-right", "featherToggleRight"],
    ["trash-2", "featherTrash2"],
    ["trash", "featherTrash"],
    ["trending-down", "featherTrendingDown"],
    ["trending-up", "featherTrendingUp"],
    ["triangle", "featherTriangle"],
    ["truck", "featherTruck"],
    ["tv", "featherTv"],
    ["type", "featherType"],
    ["umbrella", "featherUmbrella"],
    ["underline", "featherUnderline"],
    ["unlock", "featherUnlock"],
    ["upload-cloud", "featherUploadCloud"],
    ["upload", "featherUpload"],
    ["user-check", "featherUserCheck"],
    ["user-minus", "featherUserMinus"],
    ["user-plus", "featherUserPlus"],
    ["user-x", "featherUserX"],
    ["user", "featherUser"],
    ["users", "featherUsers"],
    ["video-off", "featherVideoOff"],
    ["video", "featherVideo"],
    ["voicemail", "featherVoicemail"],
    ["volume-1", "featherVolume1"],
    ["volume-2", "featherVolume2"],
    ["volume-x", "featherVolumeX"],
    ["volume", "featherVolume"],
    ["watch", "featherWatch"],
    ["wifi-off", "featherWifiOff"],
    ["wifi", "featherWifi"],
    ["wind", "featherWind"],
    ["x-circle", "featherXCircle"],
    ["x-square", "featherXSquare"],
    ["x", "featherX"],
    ["zap-off", "featherZapOff"],
    ["zap", "featherZap"],
    ["zoom-in", "featherZoomIn"],
    ["zoom-out", "featherZoomOut"],
]);