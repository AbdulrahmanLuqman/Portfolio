import { defineStore } from 'pinia'

export default function Store(){
  return defineStore('elements', {
    state: () =>({
      show: false,
      backgroundimage: 'esther.png',
      color: '#F31313',
      collaborators: [
        {
          name: 'Sanni Abdulhameed',
          image: '/src/assets/images/hammed.png',
          post: 'Tech assistant of',
          company: 'Dervac',
          comment: 'An asset to any team, their commitment to excellence shines through in every project.'
        },
        {
          name: 'Olatunji Yusuf',
          image: '/src/assets/images/agba.png',
          post: 'Frontend Developer of',
          company: 'Dervac',
          comment: 'Quick to tackle challenges with innovative solutions. Their contribution is invaluable.'
        },
        {
          name: 'Taiwo Balkis',
          image: '/src/assets/images/balkis.png',
          post: 'Supervisor, Tech assistant and Frontend Developer of',
          company: 'Dervac',
          comment: 'Bringing fresh perspectives and going the extra mile—truly an outstanding collaborator.'
        },
        {
          name: 'Abdulganiy Abdulazeez',
          image: '/src/assets/images/az.png',
          post: 'Frontend Developer of',
          company: 'Dervac',
          comment: 'Remarkable ability to adapt and thrive in dynamic environments. Their expertise is evident.'
        },
        {
          name: 'Okeyale Zakariyah',
          image: '/src/assets/images/zakariyah.png',
          post: 'Frontend Developer of',
          company: 'Dervac',
          comment: 'Precision and quality define their work. They consistently deliver beyond expectations.'
        },
        {
          name: 'Odutayo Esther',
          image: '/src/assets/images/esther.png',
          post: 'Frontend Developer of',
          company: 'Dervac',
          comment: 'A remarkable combination of dedication and skill. A true partner in achieving success.'
        }
      ]
    }),
    actions: {
      toggleModes(){
        this.inLightMode = !this.inLightMode
      }
    },
  })()
}
