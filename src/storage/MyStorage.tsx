import { Record } from "../types/types"
import uniqid from 'uniqid';

const MyStorage: React.FC = () => {
   const records: Record[] = [
      {
         'id': uniqid(),
         'Title': 'Çalıkuşu',
         'Author': 'Reşat Nuri Güntekin',
         'Rating': '10/10', 
         'Genre': 'Drama, Romance', 
         'Year': '1922', 
         'Description': 'The destiny of a young Turkish female teacher named Feride', 
         'Cover (link)': 'https://uafilm.tv/uploads/mini/fullstory/83/1555803822-1.webp', 
         'Impression': "I loved this book so much. I'd like to reread it one day."
      },
      {
         'id': uniqid(),
         'Title': "Why didn't they ask Evans?",
         'Author': 'Agatha Christie',
         'Rating': '9/10', 
         'Genre': 'Crime novel', 
         'Year': '1934', 
         'Description': "A dying man's enigmatic last words send vicar's son, Bobby Jones, and his socialite friend, Lady Frankie Derwent, on a crime-solving adventure.", 
         'Cover (link)': "https://m.media-amazon.com/images/M/MV5BNWY4MmRiMjktZTBhYS00YzkyLWFlMDgtNzQ4ZGViZDNiZWE3XkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_FMjpg_UX1000_.jpg", 
         'Impression': "It was the first book by Agatha Christie that I've read. The book's interesting and the denouement's unexpected yet logical"
      },
      {
         'id': uniqid(),
         'Title': 'Little women',
         'Author': 'Louisa May Alcott',
         'Rating': '6/10', 
         'Genre': 'Drama, Romance', 
         'Year': '1868', 
         'Description': "The lives of the four March sisters as they grow up, unravel family problems and learn to build relationships against the backdrop of the American Civil War.", 
         'Cover (link)': "https://static.kinoafisha.info/k/movie_posters/1080x1920/upload/movie_posters/1/6/1/8355161/909614671653467545.jpg", 
         'Impression': "The book was ok, but it would be more suitable for kids as there were some preaching"
      }
   ]

   const basicTemplate = ['Title', 'Author', 'Rating', 'Genre', 'Year', 'Description', 'Cover (link)', 'Impression']
   
   function setToLS() {
      const recordsStr = window.localStorage.getItem("records")
      if (recordsStr == null) window.localStorage.setItem("records", JSON.stringify(records))
      const template = window.localStorage.getItem("basicTemplate")
      if (template == null) window.localStorage.setItem("basicTemplate", JSON.stringify(basicTemplate))
      const templates = window.localStorage.getItem("templates")
      if (templates == null) window.localStorage.setItem("templates", JSON.stringify({}))
   }
   setToLS()

   return (
      <div></div>
   );
}
 
export default MyStorage;

export function getFromLS(key: string) {
   const valueStr = window.localStorage.getItem(key)
   if (valueStr || valueStr !== null) {
      return JSON.parse(valueStr)
   }
}

export function setToLS(key: string, value: any) {
   window.localStorage.setItem(key, JSON.stringify(value))
}

export function getAndAddLS(key: string, value: any) {
   const valueStr = window.localStorage.getItem(key)
   if (valueStr) {
      let parsed = JSON.parse(valueStr)
      let array = [...parsed, value]
      window.localStorage.setItem(key, JSON.stringify(array))
   }
}

export function getAndRemoveLS(key: string, id: any) {
   const valueStr = window.localStorage.getItem(key)
   if (valueStr) {
      let parsed = JSON.parse(valueStr)
      let i = parsed.findIndex((elem: Record) => elem.id === id)
      let first = parsed.slice(0, i)
      let second = parsed.slice(i + 1)
      window.localStorage.setItem(key, JSON.stringify([...first, ...second]))
   }
}

export function removeFromLS(key: string) {
   window.localStorage.removeItem(key)
}

export function checkKeyLS(key: string) {
   let item = window.localStorage.getItem(key)
   return item !== null
}