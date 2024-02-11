import { TextInput } from 'flowbite-react'

import { IoIosSearch } from 'react-icons/io'

const AppSearchInput = () => {
  return (
    <div className="flex items-center">
    <TextInput
      type="text"
      placeholder="search book......"
      shadow
      rightIcon={IoIosSearch}
    />
  </div>
  )
}

export default AppSearchInput