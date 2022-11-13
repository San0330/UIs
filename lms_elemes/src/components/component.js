class ForumActivity extends HTMLElement {
    constructor() {
        super();

        let name = this.getAttribute('name')
        let image = this.getAttribute('image')

        this.innerHTML = `
               <div class="py-5 gap-y-3" style="display: grid;grid-template-columns: 1fr 4fr 1fr;">
                    <img src="${image}" alt="user" class='w-6 h-6 rounded-full justify-self-start'>
                    <p class='text-xs text-gray-500 max-w-prose'> What is the difference between Saw and S ...</p>
                    <div class='text-xs text-gray-500'>3:15PM</div>
                    <div class='col-start-2 col-end-3 text-xs font-medium text-gray-600'>${name}</div>
                </div>
                <div class='h-[2px] bg-gray-100 ml-auto -mr-5'></div>
        `
    }
}

customElements.define('forum-activity', ForumActivity);

customElements.define('my-course', class extends HTMLElement {
    constructor() {
        super()

        let courseName = this.getAttribute('courseName')
        let courseImage = this.getAttribute('courseImage')
        let name = this.getAttribute('name')
        let progress = parseInt(this.getAttribute('progress'))

        let progressSize = (180 * progress) / 100;
        progressSize = parseInt(progressSize);

        this.innerHTML = `
            <div class='bg-white/25'>
                <div class="upperSection p-5 border-white/30 border-b ">
                    <img src="${courseImage}" alt="balance" class='h-10 w-10 mb-3' />
                    <div class='text-white text-xl mb-5'>
                        ${courseName}
                    </div>
                    <div class='text-white/40 mb-3'>Lecturer</div>
                    <div class="flex items-center gap-3">
                        <img src="../public/images/user.jpg" alt='user' class='h-8 w-8 rounded-full' />
                        <div class='text-white'>
                            ${name}
                        </div>
                    </div>
                </div>
                <div class="lowerSection p-5 text-white">
                    <div class='mb-3'>
                        <div class='h-1 bg-white/30 rounded overflow-hidden' style="width:180px">
                            <div class='h-1 bg-yellow-300' style="width:${progressSize}px">
                            </div>
                        </div>
                    </div>
                    <div class='flex justify-between'>
                        <div>
                            Class progress
                        </div>
                        <div>
                            ${progress}%
                        </div>
                    </div>
                </div>
            </div>`
    }
});
