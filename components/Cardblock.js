import Card from './Card'
import styles from '../styles/Cardblock.module.css'
import styling from '../styles/Card.module.css'


export default function Cardblock(){
    return(
        <div className={styles.cardblock}>
            <Card styling={styling.customer} pics={person[0].pics} pics={person[0].pics} name={person[0].name} city={person[0].city} content={person[0].content} status={person[0].status}/>
            <Card styling={styling.customer} pics={person[1].pics} pics={person[1].pics} name={person[1].name} city={person[0].city} content={person[0].content} status={person[1].status}/>
            <Card styling={styling.customer} pics={person[2].pics} pics={person[2].pics} name={person[2].name} city={person[0].city} content={person[0].content} status={person[2].status}/>
            <Card styling={styling.vendor} pics={person[3].pics} pics={person[3].pics} name={person[3].name} city={person[0].city} content={person[0].content} status={person[3].status}/>
            <Card styling={styling.vendor} pics={person[4].pics} pics={person[4].pics} name={person[4].name} city={person[0].city} content={person[0].content} status={person[4].status}/>
            <Card styling={styling.vendor} pics={person[5].pics} pics={person[5].pics} name={person[5].name} city={person[0].city} content={person[0].content} status={person[5].status}/>
        </div>
    )
}

const person =[{
    pics: 'Ellipse22.png',
    name: 'Joseph Ike',
    city: 'In Ikeja',
    status: 'CUSTOMER',
    content: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.'
},
{
    pics: 'Ellipse23.png',
    name:'Adetola Fashina',
    city: 'Ibadan',
    status: 'CUSTOMER',
    content: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
},
{
    pics: 'Ellipse24.png',
    name: 'Emmanuel Fayemi',
    city: 'In Akoka',
    status: 'CUSTOMER',
    content: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
},
{
    pics: 'Ellipse25.png',
    name: 'Chisom Obilor',
    city: 'In Magodo',
    status: 'VENDOR',
    content: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.'
},
{
    pics: 'Ellipse26.png',
    name: 'Adunoluwa Adeyemi',
    city: 'Iwo Road',
    status: 'VENDOR',
    content: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
},
{
    pics: 'Ellipse27.png',
    name: 'Chidi Okeke',
    city: 'In Somolu',
    status: 'VENDOR',
    content: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
}]