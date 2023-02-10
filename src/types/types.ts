export type Props = {
   onChangeTheme: () => void;
}

export interface Record {
   'id': string,
   'Title': string,
   'Author'?: string,
   'Rating'?: string, 
   'Genre'?: string, 
   'Year'?: string, 
   'Description'?: string, 
   'Cover (link)'?: string, 
   'Impression'?: string
}