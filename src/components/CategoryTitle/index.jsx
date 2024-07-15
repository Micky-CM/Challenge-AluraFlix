import styled from "styled-components";

const TitleStyles = styled.h2`
  font-size: 2.4rem;
  text-transform: uppercase;
  font-weight: bolder;
  text-align: center;
  padding: 17px 0;
  width: 290px;
	border-radius: 15px;
	color: var(--secondary-white);
  background-color: ${(props) => props.$color};

	@media (width > 1024px) {
		font-size: 3.2rem;
		width: 432px
	}
`;

const CategoryTitle = ({ children, color }) => {
  return <TitleStyles $color={color}>{children}</TitleStyles>;
};

export default CategoryTitle;
