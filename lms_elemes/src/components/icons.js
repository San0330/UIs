class Icons extends HTMLElement {
    constructor() {
        super();
        let name = this.getAttribute('name');

        let icon = ''

        switch (name) {
            case 'dashboard':
                icon = `
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="20"
                        width="20" viewBox="0 0 18 18" stroke="currentColor" version="1.1">
                        <!-- Generator: Sketch 52.5 (67469) - http://www.bohemiancoding.com/sketch -->
                        <title>dashboard</title>
                        <desc>Created with Sketch.</desc>
                        <g id="Icons" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Outlined" transform="translate(-273.000000, -245.000000)">
                                <g id="Action" transform="translate(100.000000, 100.000000)">
                                    <g id="Outlined-/-Action-/-dashboard" transform="translate(170.000000, 142.000000)">
                                        <g>
                                            <polygon id="Path" points="0 0 24 0 24 24 0 24" />
                                            <path
                                                d="M19,5 L19,7 L15,7 L15,5 L19,5 Z M9,5 L9,11 L5,11 L5,5 L9,5 Z M19,13 L19,19 L15,19 L15,13 L19,13 Z M9,17 L9,19 L5,19 L5,17 L9,17 Z M21,3 L13,3 L13,9 L21,9 L21,3 Z M11,3 L3,3 L3,13 L11,13 L11,3 Z M21,11 L13,11 L13,21 L21,21 L21,11 Z M11,15 L3,15 L3,21 L11,21 L11,15 Z"
                                                id="🔹-Icon-Color" fill="#1D1D1D" />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>`
                break;
            case 'dashboard-meter':
                icon = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64" fill="none">
                      <path d="M31.9999 10.3999C24.2448 10.4079 16.8095 13.4921 11.3258 18.9758C5.8421 24.4595 2.75786 31.8948 2.74992 39.6499C2.73428 44.265 3.82835 48.8162 5.93992 52.9199C6.04373 53.125 6.20251 53.2972 6.39852 53.4173C6.59453 53.5374 6.82006 53.6006 7.04992 53.5999H56.9999C57.2298 53.6006 57.4553 53.5374 57.6513 53.4173C57.8473 53.2972 58.0061 53.125 58.1099 52.9199C60.2226 48.8166 61.3167 44.2651 61.2999 39.6499C61.292 31.8861 58.2009 24.4433 52.7063 18.9581C47.2118 13.473 39.7637 10.3946 31.9999 10.3999V10.3999ZM31.9999 46.3099C33.3839 46.3134 34.725 46.7906 35.8002 47.662C36.8754 48.5334 37.6199 49.7467 37.9099 51.0999H26.0899C26.38 49.7467 27.1245 48.5334 28.1997 47.662C29.2749 46.7906 30.6159 46.3134 31.9999 46.3099V46.3099ZM56.1699 51.0999H40.4399C40.1517 49.1707 39.2117 47.3982 37.7762 46.0774C36.3408 44.7566 34.4964 43.967 32.5499 43.8399L21.9999 33.2599C21.7692 33.0199 21.4525 32.8814 21.1197 32.8748C20.7868 32.8682 20.4649 32.9942 20.2249 33.2249C19.9849 33.4556 19.8464 33.7723 19.8398 34.1052C19.8332 34.438 19.9592 34.7599 20.1899 34.9999L29.3899 44.2099C27.8749 44.6988 26.5265 45.6009 25.4965 46.8146C24.4665 48.0284 23.7958 49.5056 23.5599 51.0799H7.82992C6.30414 47.8925 5.43685 44.4302 5.27992 40.8999H10.7099C11.0414 40.8999 11.3594 40.7682 11.5938 40.5338C11.8282 40.2994 11.9599 39.9814 11.9599 39.6499C11.9599 39.3184 11.8282 39.0004 11.5938 38.766C11.3594 38.5316 11.0414 38.3999 10.7099 38.3999H5.27992C5.58212 32.1667 8.05897 26.2364 12.2799 21.6399L16.1099 25.4799C16.3486 25.7108 16.6678 25.8399 16.9999 25.8399C17.246 25.8384 17.4862 25.7643 17.6903 25.6268C17.8945 25.4893 18.0535 25.2947 18.1475 25.0672C18.2415 24.8398 18.2662 24.5896 18.2186 24.3482C18.171 24.1067 18.0532 23.8847 17.8799 23.7099L13.9999 19.8799C18.5954 15.6706 24.5243 13.2106 30.7499 12.9299V18.3599C30.7499 18.6914 30.8816 19.0094 31.116 19.2438C31.3505 19.4782 31.6684 19.6099 31.9999 19.6099C32.3314 19.6099 32.6494 19.4782 32.8838 19.2438C33.1182 19.0094 33.2499 18.6914 33.2499 18.3599V12.9299C39.4819 13.2243 45.4116 15.7024 49.9999 19.9299L46.1699 23.7599C45.9967 23.9347 45.8788 24.1567 45.8312 24.3982C45.7836 24.6396 45.8084 24.8898 45.9024 25.1172C45.9963 25.3447 46.1554 25.5393 46.3595 25.6768C46.5636 25.8143 46.8038 25.8884 47.0499 25.8899C47.3821 25.8899 47.7012 25.7608 47.9399 25.5299L51.7699 21.6899C55.9619 26.2805 58.42 32.1905 58.7199 38.3999H53.2899C52.9584 38.3999 52.6405 38.5316 52.406 38.766C52.1716 39.0004 52.0399 39.3184 52.0399 39.6499C52.0399 39.9814 52.1716 40.2994 52.406 40.5338C52.6405 40.7682 52.9584 40.8999 53.2899 40.8999H58.7199C58.5657 44.437 57.6983 47.9064 56.1699 51.0999V51.0999Z" fill="black"/>
                    </svg>`
                break;
            case 'man':
                icon = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><title/><g id="User"><path d="M21,30H11a5,5,0,0,1-5-5V24a9,9,0,0,1,9-9h2a9,9,0,0,1,9,9v1A5,5,0,0,1,21,30ZM15,17a7,7,0,0,0-7,7v1a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V24a7,7,0,0,0-7-7Z"/><path d="M16,14a6,6,0,1,1,6-6A6,6,0,0,1,16,14ZM16,4a4,4,0,1,0,4,4A4,4,0,0,0,16,4Z"/></g></svg>
                `
                break;
            case 'open-book':
                icon = `
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" height="20px" width="20px"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" <g
                        id="Layer_37" data-name="Layer 37">
                        <path
                            d="M55.25,7.2A4.23,4.23,0,0,0,51.13,7L32,16.35,12.87,7a4.28,4.28,0,0,0-6.12,3.82V44.39A4.27,4.27,0,0,0,9.13,48.2L31.45,59.12a1.23,1.23,0,0,0,1.1,0L54.87,48.2a4.27,4.27,0,0,0,2.38-3.81V10.81A4.23,4.23,0,0,0,55.25,7.2Zm-46,37.19V10.81a1.75,1.75,0,0,1,2.52-1.57l19,9.28V56L10.23,46A1.75,1.75,0,0,1,9.25,44.39Zm45.5,0a1.75,1.75,0,0,1-1,1.57L33.25,56V18.52l19-9.28a1.75,1.75,0,0,1,2.52,1.57Z" />
                        </g>
                    </svg>`
                break;
            case 'camera':
                icon = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 7C2.44772 7 2 7.44772 2 8V16C2 16.5523 2.44772 17 3 17H16C16.5523 17 17 16.5523 17 16V8C17 7.44772 16.5523 7 16 7H3ZM0 8C0 6.34315 1.34315 5 3 5H16C17.6569 5 19 6.34315 19 8V8.91938L20.7506 7.51889C22.0601 6.47127 24 7.40361 24 9.08062V14.9194C24 16.5964 22.0601 17.5287 20.7506 16.4811L19 15.0806V16C19 17.6569 17.6569 19 16 19H3C1.34315 19 0 17.6569 0 16V8ZM19 12.5194L22 14.9194V9.08063L19 11.4806V12.5194Z" fill="#293644"/>
                    </svg>`
                break;
            case 'message':
                icon = `
<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" width="24" height="24" viewBox="0 0 128 128"><defs><style>.cls-1{fill:#3b4551;}.cls-2{fill:#2b77c0;}</style></defs><title>a</title><path class="cls-1" d="M112.97335,11.06168H15.02665c-7.454,0-13.99239,6.9757-13.99239,14.92612V84.28942c0,7.44484,6.01577,13.05865,13.99239,13.05865H61.35251l17.98582,18.20331a4.66276,4.66276,0,0,0,6.63636,0l17.987-18.20331h9.0117c7.97776,0,13.99239-5.61381,13.99239-13.05865V25.9878C126.96574,18.03738,120.42731,11.06168,112.97335,11.06168Zm4.66413,73.22773c0,2.75338-2.512,3.73039-4.66413,3.73039H102.0122A4.663,4.663,0,0,0,98.694,89.40675l-16.0375,16.23108L66.619,89.40675a4.66108,4.66108,0,0,0-3.31818-1.38694H15.02665c-2.15215,0-4.66413-.977-4.66413-3.73039V25.9878c0-2.77388,2.3537-5.59787,4.66413-5.59787h97.94671c2.30929,0,4.66413,2.824,4.66413,5.59787Z"/><path class="cls-2" d="M89.65271,33.76515H38.34729a3.4981,3.4981,0,1,0,0,6.99619H89.65271a3.4981,3.4981,0,1,0,0-6.99619Z"/><path class="cls-2" d="M89.65271,50.70678H38.34729a3.4981,3.4981,0,1,0,0,6.99619H89.65271a3.4981,3.4981,0,1,0,0-6.99619Z"/><path class="cls-2" d="M89.65271,67.64841H38.34729a3.4981,3.4981,0,1,0,0,6.99619H89.65271a3.4981,3.4981,0,1,0,0-6.99619Z"/></svg>
`
                break;
            case 'calendar':
                icon = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 64 64" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path
                            d="M55 6.75H48.38V4C48.38 3.66848 48.2483 3.35054 48.0139 3.11612C47.7795 2.8817 47.4615 2.75 47.13 2.75C46.7985 2.75 46.4805 2.8817 46.2461 3.11612C46.0117 3.35054 45.88 3.66848 45.88 4V6.75H33.25V4C33.25 3.66848 33.1183 3.35054 32.8839 3.11612C32.6495 2.8817 32.3315 2.75 32 2.75C31.6685 2.75 31.3505 2.8817 31.1161 3.11612C30.8817 3.35054 30.75 3.66848 30.75 4V6.75H18.12V4C18.12 3.66848 17.9883 3.35054 17.7539 3.11612C17.5195 2.8817 17.2015 2.75 16.87 2.75C16.5385 2.75 16.2205 2.8817 15.9861 3.11612C15.7517 3.35054 15.62 3.66848 15.62 4V6.75H9C7.87364 6.75264 6.79417 7.20126 5.99771 7.99771C5.20126 8.79417 4.75264 9.87364 4.75 11V57C4.75264 58.1264 5.20126 59.2058 5.99771 60.0023C6.79417 60.7987 7.87364 61.2474 9 61.25H48.71C51.5046 61.2474 54.1839 60.136 56.16 58.16C58.136 56.1839 59.2474 53.5046 59.25 50.71V11C59.2474 9.87364 58.7987 8.79417 58.0023 7.99771C57.2058 7.20126 56.1264 6.75264 55 6.75V6.75ZM9 9.25H15.62V12C15.62 12.3315 15.7517 12.6495 15.9861 12.8839C16.2205 13.1183 16.5385 13.25 16.87 13.25C17.2015 13.25 17.5195 13.1183 17.7539 12.8839C17.9883 12.6495 18.12 12.3315 18.12 12V9.25H30.75V12C30.75 12.3315 30.8817 12.6495 31.1161 12.8839C31.3505 13.1183 31.6685 13.25 32 13.25C32.3315 13.25 32.6495 13.1183 32.8839 12.8839C33.1183 12.6495 33.25 12.3315 33.25 12V9.25H45.88V12C45.88 12.3315 46.0117 12.6495 46.2461 12.8839C46.4805 13.1183 46.7985 13.25 47.13 13.25C47.4615 13.25 47.7795 13.1183 48.0139 12.8839C48.2483 12.6495 48.38 12.3315 48.38 12V9.25H55C55.4633 9.25263 55.9069 9.43784 56.2345 9.76546C56.5622 10.0931 56.7474 10.5367 56.75 11V16.5H7.25V11C7.25263 10.5367 7.43784 10.0931 7.76546 9.76546C8.09309 9.43784 8.53668 9.25263 9 9.25V9.25ZM7.25 57V19H56.75V48.85H48.1C47.9355 48.8487 47.7723 48.8801 47.6201 48.9424C47.4678 49.0048 47.3295 49.0968 47.2131 49.2131C47.0968 49.3295 47.0048 49.4678 46.9424 49.6201C46.8801 49.7723 46.8487 49.9355 46.85 50.1V58.75H9C8.53668 58.7474 8.09309 58.5622 7.76546 58.2345C7.43784 57.9069 7.25263 57.4633 7.25 57V57ZM49.35 58.72V51.35H56.72C56.565 53.2529 55.7388 55.0388 54.3888 56.3888C53.0388 57.7388 51.2529 58.565 49.35 58.72V58.72Z"
                            fill="black" />
                        <path
                            d="M48.6599 41.1101V34.1101C48.5894 32.188 47.7762 30.3682 46.3915 29.0333C45.0067 27.6985 43.1583 26.9526 41.2349 26.9526C39.3116 26.9526 37.4631 27.6985 36.0784 29.0333C34.6936 30.3682 33.8805 32.188 33.8099 34.1101V41.1101C33.7733 42.1081 33.9382 43.1032 34.2949 44.036C34.6515 44.9688 35.1925 45.8202 35.8856 46.5392C36.5787 47.2582 37.4097 47.8301 38.3288 48.2207C39.2479 48.6113 40.2363 48.8126 41.2349 48.8126C42.2336 48.8126 43.222 48.6113 44.1411 48.2207C45.0602 47.8301 45.8911 47.2582 46.5842 46.5392C47.2773 45.8202 47.8183 44.9688 48.175 44.036C48.5316 43.1032 48.6966 42.1081 48.6599 41.1101V41.1101ZM46.1599 41.1101C46.1899 41.7755 46.0848 42.4401 45.8508 43.0638C45.6168 43.6875 45.2589 44.2572 44.7986 44.7387C44.3383 45.2202 43.7852 45.6035 43.1727 45.8653C42.5602 46.1271 41.901 46.2621 41.2349 46.2621C40.5688 46.2621 39.9096 46.1271 39.2971 45.8653C38.6846 45.6035 38.1316 45.2202 37.6713 44.7387C37.211 44.2572 36.8531 43.6875 36.6191 43.0638C36.3851 42.4401 36.2799 41.7755 36.3099 41.1101V34.1101C36.3671 32.8423 36.9109 31.6454 37.8283 30.7684C38.7456 29.8915 39.9658 29.4021 41.2349 29.4021C42.504 29.4021 43.7242 29.8915 44.6416 30.7684C45.5589 31.6454 46.1028 32.8423 46.1599 34.1101V41.1101Z"
                            fill="black" />
                        <path
                            d="M18.18 44.8299L26.49 40.4199C27.9247 39.6541 29.0626 38.4312 29.7232 36.9451C30.3838 35.459 30.5292 33.7948 30.1364 32.2167C29.7436 30.6385 28.835 29.2367 27.5549 28.2337C26.2747 27.2307 24.6963 26.6838 23.07 26.6799C21.0684 26.6826 19.1496 27.4789 17.7343 28.8942C16.3189 30.3095 15.5226 32.2284 15.52 34.2299C15.52 34.5615 15.6517 34.8794 15.8861 35.1138C16.1205 35.3482 16.4385 35.4799 16.77 35.4799C17.1015 35.4799 17.4195 35.3482 17.6539 35.1138C17.8883 34.8794 18.02 34.5615 18.02 34.2299C18.02 33.5691 18.1509 32.9148 18.4053 32.3049C18.6597 31.695 19.0325 31.1416 19.5021 30.6766C19.9717 30.2116 20.5288 29.8444 21.1412 29.5961C21.7536 29.3478 22.4092 29.2233 23.07 29.2299C24.1279 29.246 25.1508 29.6111 25.9798 30.2685C26.8088 30.9259 27.3973 31.8388 27.6539 32.8652C27.9105 33.8916 27.8208 34.9741 27.3987 35.9442C26.9767 36.9144 26.2459 37.7179 25.32 38.2299L17 42.6199C16.3859 42.9524 15.8997 43.4794 15.6178 44.1182C15.3358 44.7571 15.2742 45.4715 15.4425 46.1492C15.6107 46.8269 15.9994 47.4295 16.5474 47.8622C17.0955 48.295 17.7717 48.5334 18.47 48.5399H29.11C29.4415 48.5399 29.7595 48.4082 29.9939 48.1738C30.2283 47.9394 30.36 47.6215 30.36 47.2899C30.36 46.9584 30.2283 46.6405 29.9939 46.406C29.7595 46.1716 29.4415 46.0399 29.11 46.0399H18.48C18.3353 46.0451 18.1935 45.9987 18.0799 45.9089C17.9663 45.8191 17.8884 45.6919 17.86 45.5499C17.8216 45.4114 17.8326 45.2639 17.8909 45.1326C17.9493 45.0012 18.0515 44.8943 18.18 44.8299V44.8299Z"
                            fill="black" />
                    </svg>`
                break;
            case 'forum':
                icon = `
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px"
                        height="20px" viewBox="0 0 20 20" stroke="currentColor" stroke-widht="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        version="1.1">
                        <!-- Generator: Sketch 52.5 (67469) - http://www.bohemiancoding.com/sketch -->
                        <title>forum</title>
                        <desc>Created with Sketch.</desc>
                        <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Outlined" transform="translate(-884.000000, -1262.000000)">
                                <g id="Communication" transform="translate(100.000000, 1162.000000)">
                                    <g id="Outlined-/-Communication-/-forum"
                                        transform="translate(782.000000, 98.000000)">
                                        <g>
                                            <polygon id="Path" points="0 0 24 0 24 24 0 24" />
                                            <path
                                                d="M15,4 L15,11 L5.17,11 L4,12.17 L4,4 L15,4 Z M16,2 L3,2 C2.45,2 2,2.45 2,3 L2,17 L6,13 L16,13 C16.55,13 17,12.55 17,12 L17,3 C17,2.45 16.55,2 16,2 Z M21,6 L19,6 L19,15 L6,15 L6,17 C6,17.55 6.45,18 7,18 L18,18 L22,22 L22,7 C22,6.45 21.55,6 21,6 Z"
                                                id="🔹-Icon-Color" fill="#1D1D1D" />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>`
                break;
            case 'right-arrow':
                icon = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-arrow-right">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
`
                break;
            case 'score':
                icon = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 64 64" fill="none"
                        stroke="currentColor" stroke-widht="2" stroke-linecap="round" stroke-linejoin="round">
                        <path
                            d="M32 5.5C26.7588 5.5 21.6353 7.0542 17.2774 9.96605C12.9195 12.8779 9.52293 17.0166 7.5172 21.8589C5.51148 26.7011 4.98669 32.0294 6.0092 37.1699C7.03171 42.3104 9.55559 47.0322 13.2617 50.7383C16.9678 54.4444 21.6896 56.9683 26.8301 57.9908C31.9706 59.0133 37.2989 58.4885 42.1411 56.4828C46.9834 54.4771 51.1221 51.0805 54.034 46.7226C56.9458 42.3647 58.5 37.2412 58.5 32C58.4921 24.9742 55.6976 18.2384 50.7296 13.2704C45.7616 8.30245 39.0258 5.50794 32 5.5V5.5ZM32 56.5C27.1544 56.5 22.4175 55.0631 18.3885 52.371C14.3595 49.6789 11.2193 45.8525 9.36496 41.3757C7.51062 36.899 7.02543 31.9728 7.97077 27.2203C8.91611 22.4678 11.2495 18.1023 14.6759 14.6759C18.1023 11.2495 22.4678 8.9161 27.2203 7.97076C31.9728 7.02542 36.899 7.5106 41.3758 9.36495C45.8525 11.2193 49.6789 14.3595 52.371 18.3885C55.0631 22.4175 56.5 27.1544 56.5 32C56.4921 38.4954 53.9083 44.7224 49.3154 49.3153C44.7224 53.9083 38.4954 56.4921 32 56.5V56.5Z"
                            fill="black" />
                        <path
                            d="M26.6502 25.28C26.4035 24.6133 26.1935 24.0733 26.0202 23.66C25.8697 23.3077 25.6819 22.9724 25.4602 22.66C25.2635 22.3708 24.9992 22.1339 24.6902 21.97C24.3186 21.7987 23.9143 21.71 23.5052 21.71C23.096 21.71 22.6917 21.7987 22.3202 21.97C22.0126 22.1403 21.7489 22.38 21.5502 22.67C21.2945 23.0655 21.0832 23.4881 20.9202 23.93L15.0002 39C14.7902 39.53 14.6402 39.94 14.5402 40.24C14.4669 40.4695 14.4298 40.7091 14.4302 40.95C14.431 41.1239 14.4699 41.2955 14.5442 41.4527C14.6185 41.6099 14.7264 41.749 14.8602 41.86C15.1254 42.1259 15.4846 42.2768 15.8602 42.28C16.5102 42.28 16.6902 42.05 16.7502 41.97C17.1429 41.345 17.4554 40.6731 17.6802 39.97L18.8302 36.87H28.2502L29.4002 39.87C29.5302 40.2 29.6902 40.57 29.8802 40.99C29.9951 41.2792 30.1427 41.5543 30.3202 41.81C30.4307 41.949 30.5708 42.0617 30.7302 42.14C30.9167 42.2186 31.1179 42.2561 31.3202 42.25C31.5168 42.254 31.7121 42.2179 31.8944 42.1439C32.0766 42.07 32.2419 41.9598 32.3802 41.82C32.5107 41.7018 32.616 41.5586 32.6899 41.3988C32.7638 41.239 32.8047 41.066 32.8102 40.89C32.7264 40.1938 32.5235 39.5173 32.2102 38.89L26.6502 25.28ZM19.4902 34.91L23.4902 23.82L27.5402 34.91H19.4902Z"
                            fill="black" />
                        <path
                            d="M48.33 30.8598H44.07V26.5998C44.07 26.2657 43.9372 25.9452 43.7009 25.7089C43.4646 25.4726 43.1441 25.3398 42.81 25.3398C42.4758 25.3398 42.1553 25.4726 41.919 25.7089C41.6827 25.9452 41.55 26.2657 41.55 26.5998V30.8598H37.32C37.1417 30.8441 36.9621 30.8656 36.7926 30.9231C36.6231 30.9805 36.4674 31.0725 36.3354 31.1934C36.2034 31.3143 36.098 31.4613 36.0259 31.6251C35.9537 31.7889 35.9165 31.9659 35.9165 32.1448C35.9165 32.3238 35.9537 32.5008 36.0259 32.6646C36.098 32.8284 36.2034 32.9754 36.3354 33.0963C36.4674 33.2171 36.6231 33.3092 36.7926 33.3666C36.9621 33.4241 37.1417 33.4456 37.32 33.4298H41.55V37.6598C41.55 37.994 41.6827 38.3145 41.919 38.5508C42.1553 38.7871 42.4758 38.9198 42.81 38.9198C43.1441 38.9198 43.4646 38.7871 43.7009 38.5508C43.9372 38.3145 44.07 37.994 44.07 37.6598V33.4298H48.33C48.6512 33.4015 48.9502 33.2538 49.1679 33.016C49.3857 32.7781 49.5065 32.4673 49.5065 32.1448C49.5065 31.8224 49.3857 31.5116 49.1679 31.2737C48.9502 31.0359 48.6512 30.8882 48.33 30.8598V30.8598Z"
                            fill="black" />
                    </svg>`
                break;
            case 'logout':
                icon = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                    stroke="currentColor" stroke-widht="2" stroke-linecap="round" stroke-linejoin="round">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.985 9.985 0 0 1 8 4h-2.71a8 8 0 1 0 .001 12h2.71A9.985 9.985 0 0 1 12 22zm7-6v-3h-8v-2h8V8l5 4-5 4z"
                        fill="#000" />
                </svg>`
                break;
            case 'chevron-left':
                icon = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="feather feather-chevron-left">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>`
                break;
            case 'chevron-right':
                icon = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-chevron-right">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>`
                break;
            case 'wrench':
                icon = `
                <svg slot='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" stroke="currentColor"
                stroke-widht="2" height='20' width='20' stroke-linecap="round" stroke-linejoin="round">
                <g id="Wrench">
                    <circle cx="8" cy="40" r="1" />
                    <path
                        d="M45.336,9.265A1,1,0,0,0,43.688,8.9l-5.016,5.018L34.85,13.15l-.764-3.822L39.1,4.312a1,1,0,0,0-.368-1.648,10.793,10.793,0,0,0-6.881-.2,11.012,11.012,0,0,0-6.729,5.784,10.64,10.64,0,0,0-.867,7.08L3.743,35.843a5.95,5.95,0,1,0,8.414,8.414L32.672,23.742a10.652,10.652,0,0,0,7.08-.867,11.009,11.009,0,0,0,5.784-6.729A10.793,10.793,0,0,0,45.336,9.265Zm-1.718,6.313a9,9,0,0,1-4.737,5.5,8.7,8.7,0,0,1-6.254.6,1,1,0,0,0-.971.258L10.743,42.843a3.95,3.95,0,1,1-5.586-5.586L26.07,16.344a1,1,0,0,0,.258-.971,8.7,8.7,0,0,1,.6-6.254A8.95,8.95,0,0,1,35,4a8.759,8.759,0,0,1,1.461.124L32.672,7.914a1.994,1.994,0,0,0-.548,1.807l.765,3.822a1.994,1.994,0,0,0,1.568,1.568l3.822.765a2,2,0,0,0,1.807-.548l3.792-3.792A8.839,8.839,0,0,1,43.618,15.578Z" />
                </g>
                </svg>`
                break;
            case 'book':
                icon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                        id="Icons" x="0px" y="0px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;"
                        height="20" width="20" stroke="currentColor" stroke-widht="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        xml:space="preserve">
                        <style type="text/css">
                            .st0 {
                                fill: none;
                                stroke: #000000;
                                stroke-width: 2;
                                stroke-linecap: round;
                                stroke-linejoin: round;
                                stroke-miterlimit: 10;
                            }

                            .st1 {
                                fill: none;
                                stroke: #000000;
                                stroke-width: 2;
                                stroke-linecap: round;
                                stroke-linejoin: round;
                            }

                            .st2 {
                                fill: none;
                                stroke: #000000;
                                stroke-width: 2;
                                stroke-linecap: round;
                                stroke-linejoin: round;
                                stroke-dasharray: 5.2066, 0;
                            }
                        </style>
                        <polygon class="st0" points="18,15 14,12 10,15 10,3 18,3 " />
                        <path class="st0" d="M16,3h11v20H8c-1.7,0-3,1.3-3,3v0c0,1.7,1.3,3,3,3h19v-6" />
                        <path class="st0" d="M5,26V7c0-2.2,1.8-4,4-4h7" />
                    </svg>`
                break;
            default:
                icon = 'a'
        }

        this.innerHTML = icon
    }
}

customElements.define('my-icons', Icons);
