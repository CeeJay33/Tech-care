<template>
    <div class="navigation__body__section">
        <div class="image__logo__sectoon">
            <img :src="require('@/assets/TestLogo.png')" alt="company's logo">
        </div>

        <div class="nav__links__section">
            <ul class="nav__lists">
                <div class="lists">
                    <img :src="require('@/assets/home_FILL0_wght300_GRAD0_opsz24@2x.png')" alt="">
                    <li>Overview</li>
                </div>
                <div class="lists active">
                    <img :src="require('@/assets/group_FILL0_wght300_GRAD0_opsz24.png')" alt="">
                    <li>Patients</li>
                </div>

                <div class="lists">
                    <img :src="require('@/assets/calendar_today_FILL0_wght300_GRAD0_opsz24@2x.png')" alt="">
                    <li>Schedule</li>
                </div>

                <div class="lists">
                    <img :src="require('@/assets/chat_bubble_FILL0_wght300_GRAD0_opsz24@2x.png')" alt="">
                    <li>Message</li>
                </div>
                <div class="lists">
                    <img :src="require('@/assets/credit_card_FILL0_wght300_GRAD0_opsz24@2x.png')" alt="">
                    <li>Transaction</li>
                </div>
            </ul>
        </div>

        <div class="profile__sub__info">
            <div class="profile__nav__info">
                <div class="profile__image">
                    <img :src="require('@/assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png')" alt="">
                </div>
                <div class="profile__name">
                    <span class="span">Dr. Jose Simmons</span>
                    <span class="sub__Span">General Practitional</span>
                </div>

                <div class="settings__and__rest">
                    <img :src="require('@/assets/settings_FILL0_wght300_GRAD0_opsz24@2x.png')" alt="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="3.714" height="18" viewBox="0 0 3.714 18">
                        <path id="more_vert_FILL0_wght300_GRAD0_opsz24"
                            d="M421.858-752.767a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.546,1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.789,1.789,0,0,1,421.858-752.767Zm0-7.143a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.546,1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.789,1.789,0,0,1,421.858-759.91Zm0-7.143a1.788,1.788,0,0,1-1.312-.546A1.788,1.788,0,0,1,420-768.91a1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.545,1.788,1.788,0,0,1,1.312.545,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.788,1.788,0,0,1,421.858-767.053Z"
                            transform="translate(-420.001 770.767)" fill="#072635" />
                    </svg>

                </div>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    name: "NavBar.vue",
}

</script>


<style>
@import url("/src/styles/main.css");
</style>