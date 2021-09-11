function Footer() {
  const dataFooter = [
    ["Home", "My Blog", "About Me", "Project"],
    ["Github", "Instagram", "Facebook", "LinkedIn"],
    ["Portofolio", "Contact Me", "Curriculum Vitae"],
  ];
  return (
    <div className="max-w-3xl px-6 mx-auto border-t border-gray-200 pt-10">
      <div className="grid grid-cols-3 text-gray-500">
        {dataFooter.map((datas, idx) => (
          <div className="pb-10" key={idx}>
            <ul>
              {datas.map((data, idx) => (
                <li className="my-5" key={idx}>{data}</li>
              ))}
            </ul>
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default Footer;
