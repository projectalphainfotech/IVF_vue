<template>
  <div class="thq-section-padding">
    <div class="testimonial-max-width thq-section-max-width">
      <div class="testimonial-container10">
        <h2 class="thq-heading-2">{{ heading1 }}</h2>
        <span class="testimonial-text11 thq-body-small">{{ content1 }}</span>
      </div>
      <div class="thq-grid-2">
        <div class="thq-animated-card-bg-2">
          <div class="thq-animated-card-bg-1">
            <div data-animated="true" class="thq-card testimonial-card1">
              <div class="testimonial-container12">
                <img
                  :alt="author1Alt"
                  :src="author1Src"
                  class="testimonial-image1"
                />
                <div class="testimonial-container13">
                  <strong class="thq-body-large">{{ author1Name }}</strong>
                  <span class="thq-body-small">{{ author1Position }}</span>
                </div>
              </div>
              <span class="testimonial-text14 thq-body-small">{{ review1 }}</span>
            </div>
          </div>
        </div>
        <div class="thq-animated-card-bg-2">
          <div class="thq-animated-card-bg-1">
            <div data-animated="true" class="thq-card testimonial-card2">
              <div class="testimonial-container14">
                <img
                  :alt="author2Alt"
                  :src="author2Src"
                  class="testimonial-image2"
                />
                <div class="testimonial-container15">
                  <strong class="thq-body-large">{{ author2Name }}</strong>
                  <span class="thq-body-small">{{ author2Position }}</span>
                </div>
              </div>
              <span class="testimonial-text17 thq-body-small">{{ review2 }}</span>
            </div>
          </div>
        </div>
        <div class="thq-animated-card-bg-2">
          <div class="thq-animated-card-bg-1">
            <div data-animated="true" class="thq-card testimonial-card3">
              <div class="testimonial-container16">
                <img
                  :alt="author3Alt"
                  :src="author3Src"
                  class="testimonial-image3"
                />
                <div class="testimonial-container17">
                  <strong class="thq-body-large">{{ author3Name }}</strong>
                  <span class="thq-body-small">{{ author3Position }}</span>
                </div>
              </div>
              <span class="testimonial-text20 thq-body-small">{{ review3 }}</span>
            </div>
          </div>
        </div>
        <div class="thq-animated-card-bg-2">
          <div class="thq-animated-card-bg-1">
            <div data-animated="true" class="thq-card testimonial-card4">
              <div class="testimonial-container18">
                <img
                  :alt="author4Alt"
                  :src="author4Src"
                  class="testimonial-image4"
                />
                <div class="testimonial-container19">
                  <strong class="thq-body-large">{{ author4Name }}</strong>
                  <span class="thq-body-small">{{ author4Position }}</span>
                </div>
              </div>
              <span class="testimonial-text23 thq-body-small">{{ review4 }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Testimonial',
  props: {
    author2Position: {
      type: String,
      default: 'Teacher',
    },
    author1Position: {
      type: String,
      default: 'Marketing Manager',
    },
    author3Alt: {
      type: String,
      default: 'Image of Sarah Davis',
    },
    author1Name: {
      type: String,
      default: 'Emily Johnson',
    },
    author1Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1496203695688-3b8985780d6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjgyNjA1NHw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    author3Name: {
      type: String,
      default: 'Sarah Davis',
    },
    review2: {
      type: String,
      default:
        'I highly recommend ABC Hospital for anyone considering IVF treatment. The doctors and nurses are top-notch professionals who go above and beyond to provide personalized care.',
    },
    author2Name: {
      type: String,
      default: 'Michael Smith',
    },
    author4Position: {
      type: String,
      default: 'Engineer',
    },
    author4Name: {
      type: String,
      default: 'John Miller',
    },
    author4Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1636716731103-11242116065a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjgyNjA1NXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    author1Alt: {
      type: String,
      default: 'Image of Emily Johnson',
    },
    author2Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1695746998489-4c957f64012c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjgyNjA1NXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    author3Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1567186937675-a5131c8a89ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjgyNjA1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    author2Alt: {
      type: String,
      default: 'Image of Michael Smith',
    },
    author4Alt: {
      type: String,
      default: 'Image of John Miller',
    },
    content1: {
      type: String,
      default:
        'I cannot thank the team at ABC Hospital enough for their exceptional care and support throughout my IVF journey. They made me feel comfortable and confident every step of the way.',
    },
    author3Position: {
      type: String,
      default: 'Accountant',
    },
    review1: {
      type: String,
      default:
        'The staff at ABC Hospital are truly amazing. They are knowledgeable, compassionate, and dedicated to helping their patients achieve their dreams of starting a family.',
    },
    heading1: {
      type: String,
      default: 'Patient Testimonials',
    },
    review3: {
      type: String,
      default:
        'Choosing ABC Hospital for my IVF treatment was the best decision I ever made. The entire team was supportive, understanding, and always available to answer my questions.',
    },
    review4: {
      type: String,
      default:
        'I am forever grateful to ABC Hospital for helping me fulfill my dream of becoming a parent. Their expertise and care made the entire process smooth and stress-free.',
    },
  },
}
</script>

<style scoped>
.testimonial-max-width {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.testimonial-container10 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: 600px;
  align-items: center;
  margin-bottom: var(--dl-space-space-fourunits);
  flex-direction: column;
}
.testimonial-text11 {
  text-align: center;
}
.testimonial-container12 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.testimonial-image1 {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}
.testimonial-container13 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.testimonial-text14 {
  text-align: left;
}
.testimonial-container14 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.testimonial-image2 {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}
.testimonial-container15 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.testimonial-text17 {
  text-align: left;
}
.testimonial-container16 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.testimonial-image3 {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}
.testimonial-container17 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.testimonial-text20 {
  text-align: left;
}
.testimonial-container18 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.testimonial-image4 {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}
.testimonial-container19 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.testimonial-text23 {
  text-align: left;
}
@media(max-width: 991px) {
  .testimonial-container10 {
    margin-bottom: var(--dl-space-space-threeunits);
  }
}
@media(max-width: 767px) {
  .testimonial-container10 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .testimonial-card1 {
    width: 100%;
  }
  .testimonial-card2 {
    width: 100%;
  }
  .testimonial-card3 {
    width: 100%;
  }
  .testimonial-card4 {
    width: 100%;
  }
}
</style>
