import image from '../assets/image.jpg';

const Newsitem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light border-0 "
      style={{
        maxWidth: "360px",
        minHeight: "420px",
        verticalAlign: "top",
      }}
    >
      <img
        src={src ? src : image}
        className="card-img-top"
        alt="news"
        style={{
          height: "200px",
          width: "100%",
          objectFit: "cover"
        }}
      />
      <div className="card-body d-flex flex-column justify-content-between" style={{ height: "calc(100% - 200px)" }}>
        <div>
          <h5 className="card-title">{title ? title.slice(0, 50) : "No Title"}</h5>
          <p className="card-text">{description ? description.slice(0, 90) : "No Description"}</p>
        </div>
        <a href={url} target="_blank" rel="noreferrer" className="btn btn-outline-primary mt-2">Read More</a>
      </div>
    </div>
  );
};

export default Newsitem;
