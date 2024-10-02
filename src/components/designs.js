import images from "../images/exporting";

const Designs = () => {

    const FigmaDesign = ({ url, css }) => {
        return (
          <div className={css}>
            <iframe
              src={url}
              title="Figma Design"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
            />
          </div>
        );
      };

      

    return(
        <>
        </>
    )
}

export default Designs