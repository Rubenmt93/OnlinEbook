export interface Book {
    eventId:       string
    active:         boolean
    author:         string
    categories?:    string[]
    img:            string
    isbn?:          string
    link?:          string
    name:           string
    price?:         number
    userOwner?:     string
    year?:          number
    abstract?:      string
    objectID:       string
    reason?:        string[]
    reportId?:       string
}
