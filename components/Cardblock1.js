import Card from './Card'
import styles from '../styles/Cardblock1.module.css'
import styling from '../styles/Card.module.css'

export default function Cardblock1(){
    return(
        <div className={styles.cardblock}>
            <Card styling={styling.vendor} pics={person[0].pics} pics={person[0].pics} name={person[0].name} city={person[0].city} content={person[0].content} status={person[0].status}/>
            <Card styling={styling.vendor} pics={person[1].pics} pics={person[1].pics} name={person[1].name} city={person[0].city} content={person[0].content} status={person[1].status}/>
            <Card styling={styling.vendor} pics={person[2].pics} pics={person[2].pics} name={person[2].name} city={person[0].city} content={person[0].content} status={person[2].status}/>
            <Card styling={styling.vendor} pics={person[3].pics} pics={person[3].pics} name={person[3].name} city={person[0].city} content={person[0].content} status={person[3].status}/>
            <Card styling={styling.vendor} pics={person[4].pics} pics={person[4].pics} name={person[4].name} city={person[0].city} content={person[0].content} status={person[4].status}/>
            <Card styling={styling.vendor} pics={person[5].pics} pics={person[5].pics} name={person[5].name} city={person[0].city} content={person[0].content} status={person[5].status}/>
        </div>
    )
}

const person =[{
    pics: 'Ellipse32.png',
    name: 'Temi Obadofin',
    city: '',
    status: 'VENDOR',
    content: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.'
},
{
    pics: 'Ellipse33.png',
    name:'Promise Ejiofor',
    city: '',
    status: 'VENDOR',
    content: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
},
{
    pics: 'Ellipse34.png',
    name: 'Feyisola Arinola',
    city: 'In Akoka',
    status: 'VENDOR',
    content: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
},
{
    pics: 'Ellipse35.png',
    name: 'Karen Ibeh',
    city: '',
    status: 'VENDOR',
    content: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.'
},
{
    pics: 'Ellipse36.png',
    name: 'Oluchi Uzo',
    city: '',
    status: 'VENDOR',
    content: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
},
{
    pics: 'Ellipse37.png',
    name: 'Amos Okafor',
    city: '',
    status: 'VENDOR',
    content: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
}]