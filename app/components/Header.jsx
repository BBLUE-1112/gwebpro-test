import HeaderNav from "./HeaderNav";
import apiService from "../apiServices/apiService"; // Import the service
const Header = async () => {
  //fetch common data
  const h_data = await apiService.getPagedata("acf/v1/options/");
  const header_data = h_data;
  return (
    <>
      <HeaderNav headerData={header_data} />
    </>
  );
};
export default Header;
