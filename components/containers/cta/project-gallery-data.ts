import One from 'public/img/project/01.jpg'
import Two from 'public/img/project/02.jpg'
import Three from 'public/img/project/03.jpg'
import Four from 'public/img/project/04.jpg'
import Five from 'public/img/project/05.jpg'
import Six from 'public/img/project/06.jpg'

interface ProjectProps {
  id?: any
  img?: any
  titl?: string
  des?: string
  path1?: any
  path2?: any
  path3?: any
  links1?: any
  links2?: any
  links3?: any
  category?: any
  area?: any
}

export const productItem: ProjectProps[] = [
  {
    id: 0,
    img: One,
    titl: 'Analys & Backup Blockchain',
    des: 'Trust our top minds to eliminate workflow pain point implement new tech & app',
    path1: '/',
    path2: '/',
    path3: '/',
    links1: 'Backup',
    links2: 'Data',
    links3: 'Backup',
    category: 'data',
    area: 'Data Security'
  },
  {
    id: 1,
    img: Two,
    titl: 'Rento Car Rental Dashboard',
    des: 'Trust our top minds to eliminate workflow pain point implement new tech & app',
    path1: '/',
    path2: '/',
    path3: '/',
    links1: 'Backup',
    links2: 'Data',
    links3: 'Backup',
    category: 'game',
    area: 'Game Development'
  },
  {
    id: 2,
    img: Three,
    titl: 'Creative Landing Page Service',
    des: 'Trust our top minds to eliminate workflow pain point implement new tech & app',
    path1: '/',
    path2: '/',
    path3: '/',
    links1: 'Backup',
    links2: 'Data',
    links3: 'Backup',
    category: 'it',
    area: 'It Consultation'
  },
  {
    id: 3,
    img: Four,
    titl: 'Infrastructure Upgrade',
    des: 'Trust our top minds to eliminate workflow pain point implement new tech & app',
    path1: '/',
    path2: '/',
    path3: '/',
    links1: 'Backup',
    links2: 'Data',
    links3: 'Backup',
    category: 'seo',
    area: 'SEO'
  },
  {
    id: 4,
    img: Five,
    titl: 'AR/VR War 1986 Game',
    des: 'Trust our top minds to eliminate workflow pain point implement new tech & app',
    path1: '/',
    path2: '/',
    path3: '/',
    links1: 'Backup',
    links2: 'Data',
    links3: 'Backup',
    category: 'data',
    area: 'Data Security'
  },
  {
    id: 5,
    img: Six,
    titl: 'Rento Car Rental Dashboard',
    des: 'Trust our top minds to eliminate workflow pain point implement new tech & app',
    path1: '/',
    path2: '/',
    path3: '/',
    links1: 'Backup',
    links2: 'Data',
    links3: 'Backup',
    category: 'game',
    area: 'Game Development'
  }
]
