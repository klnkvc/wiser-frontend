import TeamCard from './TeamCard';
import putri from '../assets/photo-card/putri.png'
import aura from '../assets/photo-card/aura.png'
import istiarsa from '../assets/photo-card/istiarsa.png'
import fhauzia from '../assets/photo-card/fhauzia.png'
import ivanka from '../assets/photo-card/ivanka.png'
import syalom from '../assets/photo-card/syalom.png'
import ardika from '../assets/photo-card/ardika.png'
import cherry from '../assets/photo-card/cherry.png'
import silvie from '../assets/photo-card/silvie.png'
import slamet from '../assets/photo-card/slamet.png'
import kristop from '../assets/photo-card/kristop.png'
import fadli from '../assets/photo-card/fadli.png'
import rayhan from '../assets/photo-card/rayhan.png'
import yassar from '../assets/photo-card/yassar.png'
import dian from '../assets/photo-card/dian.png'
import agung from '../assets/photo-card/agung.png'
import anggi from '../assets/photo-card/anggi.png'
import revo from '../assets/photo-card/revo.png'
import nia from '../assets/photo-card/nia.png'

const teamMembers = [
  {
    name: "Putri Andani Intan Permatasari",
    role: "Project Manager",
    image: putri,
    instagram: "https://www.instagram.com/poetrintan",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Aura Maulida Izzati Kostelani",
    role: "Scrum Master",
    image: aura,
    instagram: "https://www.instagram.com/aura_kostelani",
    linkedin: "https://www.linkedin.com/in/aura-kostelani-5088ab2b8/"
  },
  {
    name: "Istiarsa Pawestri",
    role: "Scrum Master",
    image: istiarsa,
    instagram: "https://www.instagram.com/meestyc",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Fhauzia Fitri",
    role: "Scrum Master",
    image: fhauzia,
    instagram: "https://www.instagram.com/fhauzia_a",
    linkedin: "https://www.linkedin.com/in/fhauzia-fitri"
  },
  {
    name: "Ivanka Angelina Junietta",
    role: "Hipster",
    image: ivanka,
    instagram: "https://www.instagram.com/ivnkangel",
    linkedin: "https://www.linkedin.com/in/ivanka-a-j-pasanda-145403256"
  },
  {
    name: "Syalom Advensia Manurung",
    role: "Hipster",
    image: syalom,
    instagram: "https://www.instagram.com/syalommmadvensiaaa",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Ardika Gulo",
    role: "Hipster",
    image: ardika,
    instagram: "https://www.instagram.com/ardikagulo",
    linkedin: "https://linkedin.com"
  },
  {
    name: "⁠Cherry Elysia Putri",
    role: "Hipster",
    image: cherry,
    instagram: "https://www.instagram.com/pocheri.sweet/",
    linkedin: "https://www.linkedin.com/in/cherry-elysia-putri-038a702b2"
  },
  {
    name: "Silvie Mutiara Elisfa",
    role: "Hipster",
    image: silvie,
    instagram: "https://www.instagram.com/slv_mtra",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Slamet Daroini",
    role: "Hacker",
    image: slamet,
    instagram: "https://www.instagram.com/celurion",
    linkedin: "https://www.linkedin.com/in/slamet-daroini-393675314/"
  },
  {
    name: "Kristopeles Heykel Tambunan",
    role: "Hacker",
    image: kristop,
    instagram: "https://www.instagram.com/plss1063/",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Muhammad Fadli Fauzi Sileuw",
    role: "Hacker",
    image: fadli,
    instagram: "https://www.instagram.com/fadli305",
    linkedin: "https://www.linkedin.com/in/fadlisileuw"
  },
  {
    name: "Muhammad Rayhan H.",
    role: "Hacker",
    image: rayhan,
    instagram: "https://www.instagram.com/rayhaaaann27_",
    linkedin: "https://www.linkedin.com/in/muhammad-rayhan-hadinugraha-2a9bb4322"
  },
  {
    name: "Muh. Yassar Nurfajri D.",
    role: "Hacker",
    image: yassar,
    instagram: "https://www.instagram.com/muh.yassarrr/",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Dian Reski Amelia",
    role: "Hacker",
    image: dian,
    instagram: "https://www.instagram.com/dianreskiii__",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Agung Try Nugraha",
    role: "Design Researcher",
    image: agung,
    instagram: "https://www.instagram.com/awww_kyahhh_/",
    linkedin: "https://www.linkedin.com/in/agung-try-nurgaha-726845258/"
  },
  {
    name: "Anggi Muhammad Fajri ",
    role: "ML Engineer",
    image: anggi,
    instagram: "https://www.instagram.com/anggimfajri",
    linkedin: "https://www.linkedin.com/in/anggi-m-fajri-68b8a831b"
  },
  {
    name: "Revo Dwi Arya",
    role: "ML Engineer",
    image: revo,
    instagram: "https://www.instagram.com/revodwiarya",
    linkedin: "http://www.linkedin.com/in/revo-dwi-arya-114043332"
  },
  {
    name: "Nia Khairani",
    role: "ML Engineer",
    image: nia,
    instagram: "https://www.instagram.com/niakhrn18",
    linkedin: "https://linkedin.com"
  },

 
];

const TeamSection = () => {
  return (
    <div className="mx-auto px-4 py-10 max-w-screen-lg">
      <h2 className="text-3xl font-bold text-center mb-10">Temui Tim Kami</h2>

      {/* Row Pertama dengan 1 Card */}
      <div className="flex justify-center mb-8">
        <TeamCard {...teamMembers[0]} />
      </div>

      {/* Baris berikutnya dengan 3 Card per baris */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {teamMembers.slice(1).map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </div>
);
};


export default TeamSection;
