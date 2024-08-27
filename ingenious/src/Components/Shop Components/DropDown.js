import React, {useState} from 'react'

const DropDown = ({options, label}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption,setSelectedOption] = useState(null);

    const toggleDropDown = () => {
        setIsOpen(!isOpen);
    }

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false)
    }
  return (
    <div>
      <button type="button" id="dropdownToggle" onClick={toggleDropDown}
        class="px-5 py-2.5 border border-gray-300 text-gray-800 text-sm outline-none bg-white hover:bg-gray-50">
        {selectedOption || label}
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd" data-original="#000000" />
        </svg>
      </button>
      {isOpen && (
    <ul id="dropdownMenu" class='absolute shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000]  divide-y max-h-96 overflow-auto'>
    {options.map((option, index)=> (
        <li className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer" onClick={() => handleOptionClick(option)}>
            {option}
        </li>
    ))}
    </ul>
)}
      
    </div>
  )
}

export default DropDown