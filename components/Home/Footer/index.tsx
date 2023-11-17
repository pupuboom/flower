const Footer = () => {
  return (
    <div className=" w-full h-[38px]  border-t-[1px] flex items-center justify-center z-50">
      <footer className="text-center text-sm text-gray-700 dark:text-gray-300 px-4 flex">
        <div className="flex items-center space-x-1">
          <span>©️</span>
          <span>{new Date().getFullYear()}&nbsp;</span>
          <a
            className="font-medium py-[1px] border-b border-dotted border-black/60 hover:border-black/0 dark:border-gray-200 dark:hover:border-gray-200/0 animated-underline"
            target="_blank">
            lizeguo个人所有
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
