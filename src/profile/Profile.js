import PropTypes from "prop-types";

export const Data = ({fullName, bio, profession}) => {
    console.log(fullName);
    return (
        <>
        <h1>Full Name : {fullName}</h1>
        <h1>Bio : {bio}</h1>
        <h1>Profession : {profession}</h1>
        </>
    )
};

export const MyImage = ({children}) => {
    return (
        <>
        <h1>This is my {children} : </h1>
        <img src="/node.jpeg" alt="othman" height="420" style={{marginBottom : 20, marginTop : 10}}></img>
        </>
    )
};

export const ActionAlert = ({handleName}) => {
    const buttonStyle = {height : 40, width: 120, fontSize: 20, fontWeight: 300, color: "#9100ff", marginBottom : 20};
    return (
        <button style={buttonStyle} onClick={e => handleName(e)}>Click Me</button>
    )
};

Data.defaultProps = {
    fullName: "Othman Stambouli",
    bio: "29 years old and I love Mcdonalds",
    profession: "Special Ops"
};
MyImage.defaultProps = {
    children: "image"
};

Data.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
};
MyImage.propTypes = {
    children: PropTypes.string
};
