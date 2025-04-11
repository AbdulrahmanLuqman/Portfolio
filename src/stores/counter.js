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
          image: '/images/hammed.png',
          post: 'Tech assistant of',
          company: 'Dervac',
          comment: 'An asset to any team, their commitment to excellence shines through in every project.'
        },
        {
          name: 'Olatunji Yusuf',
          image: '/images/agba.png',
          post: 'Frontend Developer of',
          company: 'Dervac',
          comment: 'Quick to tackle challenges with innovative solutions. Their contribution is invaluable.'
        },
        {
          name: 'Taiwo Balkis',
          image: '/images/balkis.png',
          post: 'Supervisor, Tech assistant and Frontend Developer of',
          company: 'Dervac',
          comment: 'Bringing fresh perspectives and going the extra mile—truly an outstanding collaborator.'
        },
        {
          name: 'Abdulganiy Abdulazeez',
          image: '/images/az.png',
          post: 'Frontend Developer of',
          company: 'Dervac',
          comment: 'Remarkable ability to adapt and thrive in dynamic environments. Their expertise is evident.'
        },
        {
          name: 'Okeyale Zakariyah',
          image: '/images/zakariyah.png',
          post: 'Frontend Developer of',
          company: 'Dervac',
          comment: 'Precision and quality define their work. They consistently deliver beyond expectations.'
        },
        {
          name: 'Odutayo Esther',
          image: '/images/esther.png',
          post: 'Frontend Developer of',
          company: 'Dervac',
          comment: 'A remarkable combination of dedication and skill. A true partner in achieving success.'
        }
      ],
      projects: [
        {
          image: "/images/note-taking.png",
          technologies: ["React", "Tailwind"],
          link: "https://note-taking-1ynq.vercel.app/",
          comment: "External Link - Noter(collaborated)"
        },
        {
          image: "/images/reconxi.png",
          technologies: ["Next.js", "Tailwind"],
          link: "https://reconxi.com/",
          comment: "External Link - Reconxi(collaborated)"
        },
        {
          image: "/images/ip-address-tracker.png",
          technologies: ["React", "Tailwind"],
          link: "https://ip-address-tracker-seven-sigma.vercel.app/",
          comment: "External Link - IP Address Tracker"
        },
        {
          image: "/images/summa-ease-ai.png",
          technologies: ["React", "Tailwind"],
          link: "https://summar-ease-ai-zeta.vercel.app/",
          comment: "External Link - SummarEaseAi"
        },
        {
          image: "/images/dashboard.png",
          technologies: ["Vue", "Tailwind"],
          link: null,
          comment: "Gallery - Medic(collaborated)"
        },
        {
          image: "/images/ticket-generator.png",
          technologies: ["Next.js", "Tailwind"],
          link: "https://conference-ticket-generator-inky.vercel.app/",
          comment: "External Link - Ticket Generator"
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
