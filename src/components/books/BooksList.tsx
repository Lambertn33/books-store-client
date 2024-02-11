import BookDetails from "./BookDetails"

const BooksList = () => {
  return (
    <div className="grid grid-cols xl:grid-cols-3 gap-x-12 gap-y-6 justify-center xl:justify-normal">
        <BookDetails />
        <BookDetails />
        <BookDetails />
    </div>
  )
}

export default BooksList