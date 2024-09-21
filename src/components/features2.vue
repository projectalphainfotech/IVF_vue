<template>
  <div class="thq-section-padding">
    <div class="features2-container2 thq-section-max-width">
      <div class="features2-tabs-menu">
        <div @click="activeTab = 0" class="features2-tab-horizontal1">
          <div class="features2-divider-container1">
            <div v-if="activeTab === 0" class="features2-container3"></div>
          </div>
          <div class="features2-content1">
            <h2 class="thq-heading-2">{{ feature1Title }}</h2>
            <span class="thq-body-small">{{ feature1Description }}</span>
          </div>
        </div>
        <div @click="activeTab = 1" class="features2-tab-horizontal2">
          <div class="features2-divider-container2">
            <div v-if="activeTab === 1" class="features2-container4"></div>
          </div>
          <div class="features2-content2">
            <h2 class="thq-heading-2">{{ feature2Title }}</h2>
            <span class="thq-body-small">{{ feature2Description }}</span>
          </div>
        </div>
        <div @click="activeTab = 2" class="features2-tab-horizontal3">
          <div class="features2-divider-container3">
            <div v-if="activeTab === 2" class="features2-container5"></div>
          </div>
          <div class="features2-content3">
            <h2 class="thq-heading-2">{{ feature3Title }}</h2>
            <span class="thq-body-small">{{ feature3Description }}</span>
          </div>
        </div>
      </div>
      <div class="features2-image-container">
        <img
          :alt="feature1ImgAlt"
          :src="feature1ImgSrc"
          v-if="activeTab === 0"
          class="features2-image1 thq-img-ratio-16-9"
        />
        <img
          :alt="feature2ImgAlt"
          :src="feature2ImgSrc"
          v-if="activeTab === 1"
          class="features2-image2 thq-img-ratio-16-9"
        />
        <img
          :alt="feature3ImgAlt"
          :src="feature3ImgSrc"
          v-if="activeTab === 2"
          class="features2-image3 thq-img-ratio-16-9"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Features2',
  props: {
    feature3Description: {
      type: String,
      default:
        'We understand that every patient is unique, and we tailor our treatment plans to meet individual needs and maximize success rates.',
    },
    feature1ImgAlt: {
      type: String,
      default: 'State-of-the-Art Facilities Image Alt Text',
    },
    feature1Description: {
      type: String,
      default:
        'Our hospital is equipped with the latest technology and modern facilities to provide the best care for our patients.',
    },
    feature3ImgAlt: {
      type: String,
      default: 'Personalized Treatment Plans Image Alt Text',
    },
    feature2Title: {
      type: String,
      default: 'Experienced Medical Team',
    },
    feature1Title: {
      type: String,
      default: 'State-of-the-Art Facilities',
    },
    feature1ImgSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjgyNjA1NXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    feature3ImgSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1505329927822-d21ffa647f49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjgyNjA1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    feature2Description: {
      type: String,
      default:
        'Our team of experienced doctors and specialists are dedicated to helping you through every step of your IVF journey.',
    },
    feature3Title: {
      type: String,
      default: 'Personalized Treatment Plans',
    },
    feature2ImgAlt: {
      type: String,
      default: 'Experienced Medical Team Image Alt Text',
    },
    feature2ImgSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1518799937599-77763326c394?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjgyNjA1N3w&ixlib=rb-4.0.3&q=80&w=1080',
    },
  },
  data() {
    return {
      activeTab: 0,
    }
  },
}
</script>

<style scoped>
.features2-container2 {
  width: 100%;
  display: grid;
  grid-gap: var(--dl-space-space-fiveunits);
  position: relative;
  grid-template-columns: 1fr 1fr;
}
.features2-tabs-menu {
  gap: var(--dl-space-space-twounits);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.features2-tab-horizontal1 {
  gap: var(--dl-space-space-twounits);
  cursor: pointer;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.features2-divider-container1 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
}
.features2-container3 {
  width: 2px;
  align-self: stretch;
  background-color: var(--dl-color-theme-neutral-dark);
}
.features2-content1 {
  gap: 16px;
  flex: 1;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
}
.features2-tab-horizontal2 {
  gap: var(--dl-space-space-twounits);
  cursor: pointer;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.features2-divider-container2 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
}
.features2-container4 {
  width: 2px;
  align-self: stretch;
  background-color: var(--dl-color-theme-neutral-dark);
}
.features2-content2 {
  gap: 16px;
  flex: 1;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
}
.features2-tab-horizontal3 {
  gap: var(--dl-space-space-twounits);
  cursor: pointer;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.features2-divider-container3 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
}
.features2-container5 {
  width: 2px;
  align-self: stretch;
  background-color: var(--dl-color-theme-neutral-dark);
}
.features2-content3 {
  gap: 16px;
  flex: 1;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
}
.features2-image-container {
  height: 100%;
  display: flex;
  position: relative;
}
.features2-image1 {
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
.features2-image2 {
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
.features2-image3 {
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
@media(max-width: 991px) {
  .features2-container2 {
    grid-gap: var(--dl-space-space-twounits);
    grid-template-columns: 1fr;
  }
  .features2-tabs-menu {
    order: 2;
  }
}
</style>
