(()=>{(()=>{let n='<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width=".125em"><path d="M18 6L6 18M6 6l12 12"></path></path></g>';window.$cropguide._setLocale({labelReset:"Reset",labelDefault:"Default",labelAuto:"Auto",labelNone:"None",labelEdit:"Edit",labelClose:"Close",labelSupportError:e=>`${e.join(", ")} not supported on this browser`,labelColor:"Color",labelWidth:"Width",labelSize:"Size",labelOffset:"Offset",labelAmount:"Amount",labelInset:"Inset",labelRadius:"Radius",labelSizeExtraSmall:"Extra small",labelSizeSmall:"Small",labelSizeMediumSmall:"Medium small",labelSizeMedium:"Medium",labelSizeMediumLarge:"Medium large",labelSizeLarge:"Large",labelSizeExtraLarge:"Extra large",labelButtonRevert:"Revert",labelButtonCancel:"Cancel",labelButtonUndo:"Undo",labelButtonRedo:"Redo",labelButtonExport:"Done",iconSupportError:'<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><g><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></g>',iconButtonClose:n,iconButtonRevert:'<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width=".125em"><path d="M7.388 18.538a8 8 0 10-2.992-9.03"/><path fill="currentColor" d="M2.794 11.696L2.37 6.714l5.088 3.18z"/><path d="M12 8v4M12 12l4 2"/></g>',iconButtonUndo:'<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width=".125em"><path d="M10 8h4c2.485 0 5 2 5 5s-2.515 5-5 5h-4"/><path fill="currentColor" d="M5 8l4-3v6z"/></g>',iconButtonRedo:'<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width=".125em"><path d="M14 8h-4c-2.485 0-5 2-5 5s2.515 5 5 5h4"/><path fill="currentColor" d="M19 8l-4-3v6z"/></g>',iconButtonExport:'<polyline points="20 6 9 17 4 12" fill="none" stroke="currentColor" stroke-width=".125em"></polyline>',statusLabelButtonClose:"Close",statusIconButtonClose:n,statusLabelLoadImage:e=>!e||!e.task?"Waiting for image":e.error?e.error.code==="IMAGE_TOO_SMALL"?"Minimum image size is {minWidth} \xD7 {minHeight}":"Error loading image":e.task==="blob-to-bitmap"?"Creating preview\u2026":"Loading image\u2026",statusLabelProcessImage:e=>{if(!(!e||!e.task))return e.task==="store"?e.error?"Error uploading image":"Uploading image\u2026":e.error?"Error processing image":"Processing image\u2026"},cropLabel:"Crop",cropIcon:'<g stroke-width=".125em" stroke="currentColor" fill="none"><path d="M23 17H9a2 2 0 0 1-2-2v-5m0-3V1 M1 7h14a2 2 0 0 1 2 2v7m0 4v3"/></g>',cropIconButtonRecenter:'<path stroke="currentColor" fill="none" stroke-width="2" stroke-linejoin="bevel" d="M1.5 7.5v-6h6M1.5 16.5v6h6M22.5 16.5v6h-6M22.5 7.5v-6h-6"/><circle cx="12" cy="12" r="3.5" fill="currentColor" stroke="none"/>',cropIconButtonRotateLeft:'<g stroke="none" fill="currentColor"><path fill="none" d="M-1-1h582v402H-1z"/><rect x="3" rx="1" height="12" width="12" y="9"/><path d="M15 5h-1a5 5 0 015 5 1 1 0 002 0 7 7 0 00-7-7h-1.374l.747-.747A1 1 0 0011.958.84L9.603 3.194a1 1 0 000 1.415l2.355 2.355a1 1 0 001.415-1.414l-.55-.55H15z"/></g>',cropIconButtonRotateRight:'<g stroke="none" fill="currentColor"><path fill="none" d="M-1-1h582v402H-1z"/><path d="M11.177 5H10a5 5 0 00-5 5 1 1 0 01-2 0 7 7 0 017-7h1.374l-.747-.747A1 1 0 0112.042.84l2.355 2.355a1 1 0 010 1.415l-2.355 2.354a1 1 0 01-1.415-1.414l.55-.55z"/><rect rx="1" height="12" width="12" y="9" x="9"/></g>',cropIconButtonFlipVertical:'<g stroke="none" fill="currentColor"><path d="M19.993 12.143H7a1 1 0 0 1-1-1V5.994a1 1 0 0 1 1.368-.93l12.993 5.15a1 1 0 0 1-.368 1.93z"/><path d="M19.993 14a1 1 0 0 1 .368 1.93L7.368 21.078A1 1 0 0 1 6 20.148V15a1 1 0 0 1 1-1h12.993z" opacity=".6"/></g>',cropIconButtonFlipHorizontal:'<g stroke="none" fill="currentColor"><path d="M11.93 7.007V20a1 1 0 0 1-1 1H5.78a1 1 0 0 1-.93-1.368l5.15-12.993a1 1 0 0 1 1.929.368z"/><path d="M14 7.007V20a1 1 0 0 0 1 1h5.149a1 1 0 0 0 .93-1.368l-5.15-12.993A1 1 0 0 0 14 7.007z" opacity=".6"/></g>',cropIconSelectPreset:(e,o)=>{let[r,t,l]=o?[o<1?1:.3,o===1?.85:.5,o>1?1:.3]:[.2,.3,.4];return`<g fill="currentColor">
                <rect opacity="${r}" x="2" y="4" width="10" height="18" rx="1"/>
                <rect opacity="${t}" x="4" y="8" width="14" height="14" rx="1"/>
                <rect opacity="${l}" x="6" y="12" width="17" height="10" rx="1"/>
            </g>`},cropIconCropBoundary:(e,o)=>{let[r,t,l,i]=o?[.3,1,0,0]:[0,0,.3,1];return`<g fill="currentColor">
                <rect opacity="${r}" x="2" y="3" width="20" height="20" rx="1"/>
                <rect opacity="${t}" x="7" y="8" width="10" height="10" rx="1"/>
                <rect opacity="${l}" x="4" y="8" width="14" height="14" rx="1"/>
                <rect opacity="${i}" x="12" y="4" width="10" height="10" rx="1"/>
            </g>`},cropLabelButtonRecenter:"Recenter",cropLabelButtonRotateLeft:"Rotate left",cropLabelButtonRotateRight:"Rotate right",cropLabelButtonFlipHorizontal:"Flip horizontal",cropLabelButtonFlipVertical:"Flip vertical",cropLabelSelectPreset:"Crop shape",cropLabelCropBoundary:"Crop boundary",cropLabelCropBoundaryEdge:"Edge of image",cropLabelCropBoundaryNone:"None",cropLabelTabRotation:"Rotation",cropLabelTabZoom:"Zoom"})})();})();