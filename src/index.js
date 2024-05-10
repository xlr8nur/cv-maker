import { v4 as uuidv4 } from 'uuid'

export const cvExample = {
  name: 'Jane Doe',
  role: 'Programmer',
  avatarUrl: 'exampleurl',
  profileDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero consequatur fugit optio veniam alias excepturi quidem eaque quia reiciendis? Inventore quibusdam repellendus, ab repudiandae fugit optio maxime voluptate quidem explicabo.',
  workExperience: [
    {
      id: uuidv4(),
      role: 'Junior',
      timePeriod: 'FEB 2020 - DEC 2023',
      companyName: 'DEF Company',
      companyLocation: 'Istanbul - Pekin',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum vitae natus non ducimus rem laudantium fuga architecto, modi ad provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, totam?'
    },
    {
      id: uuidv4(),
      role: 'Junior',
      timePeriod: 'FEB 2020 - DEC 2023',
      companyName: 'DEF Company',
      companyLocation: 'Istanbul - Pekin',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum vitae natus non ducimus rem laudantium fuga architecto, modi ad provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, totam?'
    },
    {
      id: uuidv4(),
      role: 'Junior',
      timePeriod: 'FEB 2020 - DEC 2023',
      companyName: 'DEF Company',
      companyLocation: 'Istanbul - Pekin',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum vitae natus non ducimus rem laudantium fuga architecto, modi ad provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, totam?'
    },
  ],
  skills: [
    { id: uuidv4(), value: 'Bilingual' },
    { id: uuidv4(), value: 'Hardworker' },
    { id: uuidv4(), value: 'Good Communicator' },
    { id: uuidv4(), value: 'Problem Solving' },
    { id: uuidv4(), value: 'Adaptive' },
  ],
  contact: {
    addressFirstLine: '#000 Main District',
    addressSecondLine: '1th Avenue, Ist - 10000',
    phoneNumber: '+0 000 000 000',
    email: 'info@yourmail.com'
  },
  education: [
    {
      id: uuidv4(),
      title: "Master's in CompSci",
      timePeriod: 'FEB 2020 - DEC 2023',
      institution: 'University of Central Florida',
      country: 'USA',
    },
  ],
  references: [
    {
      id: uuidv4(),
      name: 'Mr. Jane Doe',
      role: 'Junior Programmer',
      company: 'DEF Technologies',
      email: 'somename@mail.com',
      phoneNumber: '+000 0000 0000'
    },
  ]
}

export const cvEmpty = {
  name: '',
  role: '',
  avatarUrl: '',
  profileDescription: '',
  workExperience: [],
  skills: [],
  contact: {
    addressFirstLine: '',
    addressSecondLine: '',
    phoneNumber: '',
    email: ''
  },
  education: [],
  references: []
}
