<template>
  <div class="steps-container1 thq-section-padding">
    <div class="steps-max-width thq-section-max-width">
      <div class="steps-container2 thq-grid-2">
        <div class="steps-section-header">
          <h1>MOM’s IVF provides top-notch care in women's health specialties.</h1>
          <div class="steps-actions">
          
              <!-- <span class="thq-body-small">Main action</span> -->
               <FormComponent></FormComponent>
          </div> 
        </div>
        <div class="steps-container3">
          <div class="steps-container4 thq-card">
            <h2 class="thq-heading-2">{{ step1Title }}</h2>
            <span class="steps-text14 thq-body-small">
              {{ step1Description }}
            </span>
            <!-- <label class="steps-text15 thq-heading-3">01</label> -->
          </div>
          <div class="steps-container5 thq-card">
            <h2 class="thq-heading-2">{{ step2Title }}</h2>
            <span class="steps-text17 thq-body-small">
              {{ step2Description }}
            </span>
            <!-- <label class="steps-text18 thq-heading-3">02</label> -->
          </div>
          <div class="steps-container6 thq-card">
            <h2 class="thq-heading-2">{{ step3Title }}</h2>
            <span class="steps-text20 thq-body-small">
              {{ step3Description }}
            </span>
            <!-- <label class="steps-text21 thq-heading-3">03</label> -->
          </div>
          <div class="steps-container7 thq-card">
            <h2 class="thq-heading-2">{{ step4Title }}</h2>
            <span class="steps-text23 thq-body-small">
              {{ step4Description }}
            </span>
            <!-- <label class="steps-text24 thq-heading-3">04</label> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormComponent from "../components/Form/Form.vue"

export default {
  name: 'Steps',
  components: {
    FormComponent, // Registering the component
  },
  props: {
    step1Description: {
      type: String,
      default:
        'Schedule a consultation with our fertility specialist to discuss your medical history and determine the best course of action for your IVF journey.',
    },
    step3Description: {
      type: String,
      default:
        'Surgical procedure to retrieve mature eggs from the ovaries for fertilization in the lab.',
    },
    step2Title: {
      type: String,
      default: 'Ovarian Stimulation',
    },
    step2Description: {
      type: String,
      default:
        'Undergo ovarian stimulation to encourage the growth of multiple eggs for retrieval during the IVF process.',
    },
    step1Title: {
      type: String,
      default: 'IVF (In Vitro Fertilization)',
    },
    step3Title: {
      type: String,
      default: 'IUI (Intrauterine Insemination)',
    },
    step4Description: {
      type: String,
      default:
        'Transferring the developed embryos into the uterus to establish pregnancy.',
    },
    step4Title: {
      type: String,
      default: 'Infertility Assessment',
    },
  },
}

</script>

<style scoped>
.steps-container1 {
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.steps-max-width {
  gap: var(--dl-space-space-fourunits);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.steps-container2 {
  align-items: start;
}
.steps-section-header {
  gap: var(--dl-space-space-oneandhalfunits);
  top: 15%;
  display: flex;
  position: sticky;
  align-items: flex-start;
  flex-direction: column;
}
.steps-actions {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: flex-start;
}
.steps-container3 {
  grid-area: span 1/span 1/span 1/span 1;
}
.steps-container4 {
  top: 10%;
  position: sticky;
  transform: rotate(-2deg);
  margin-bottom: var(--dl-space-space-twounits);
  background-color: var(--dl-color-theme-accent1);
}
.steps-text14 {
  text-align: center;
}
.steps-text15 {
  top: var(--dl-space-space-unit);
  right: var(--dl-space-space-unit);
  position: absolute;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
}
.steps-container5 {
  top: 10%;
  position: sticky;
  transform: rotate(2deg);
  margin-bottom: var(--dl-space-space-twounits);
  background-color: var(--dl-color-theme-accent2);
}
.steps-text17 {
  text-align: center;
}
.steps-text18 {
  top: var(--dl-space-space-unit);
  right: var(--dl-space-space-unit);
  position: absolute;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
}
.steps-container6 {
  top: 10%;
  position: sticky;
  transform: rotate(-2deg);
  margin-bottom: var(--dl-space-space-twounits);
  background-color: var(--dl-color-theme-accent1);
}
.steps-text20 {
  text-align: center;
}
.steps-text21 {
  top: var(--dl-space-space-unit);
  right: var(--dl-space-space-unit);
  position: absolute;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
}
.steps-container7 {
  top: 10%;
  position: sticky;
  transform: rotate(2deg);
  background-color: var(--dl-color-theme-accent2);
}
.steps-text23 {
  text-align: center;
}
.steps-text24 {
  top: var(--dl-space-space-unit);
  right: var(--dl-space-space-unit);
  position: absolute;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
}
@media(max-width: 991px) {
  .steps-max-width {
    flex-direction: column;
  }
}
@media(max-width: 767px) {
  .steps-section-header {
    position: static;
    margin-bottom: var(--dl-space-space-twounits);
  }
  .steps-actions {
    width: 100%;
    align-self: flex-start;
  }
  .steps-container4 {
    width: 100%;
  }
  .steps-container5 {
    width: 100%;
  }
  .steps-container6 {
    width: 100%;
  }
  .steps-container7 {
    width: 100%;
  }
}
@media(max-width: 479px) {
  .steps-button {
    width: 100%;
  }
}

</style>
