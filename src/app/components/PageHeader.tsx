const PageHeader = ({
  title,
  message,
  icon,
}: {
  title: string;
  message: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="bg-white dark:bg-gray-900 w-full py-4 flex justify-between items-center px-12">
      <div>
        <div className="flex items-center mb-2 gap-2 font-semibold">
          {icon} <span>{title}</span>
        </div>
        <p className="text-gray-500">{message}</p>
      </div>
      <div>
        <button className="py-3 px-4 text-sm bg-black dark:bg-gray-800 rounded-full text-white dark:text-white">
          Add Appliance
        </button>
      </div>
    </div>
  );
};

export default PageHeader;
