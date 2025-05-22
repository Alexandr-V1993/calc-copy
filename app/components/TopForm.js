function TopForm({ title, description, children, span }) {
  return (
    <section className="topform">
      <div className="topformdesc">
        <h1>
          {title} <span>{span}</span>
        </h1>
        <p itemprop="description">{description}</p>
      </div>
      {children}
    </section>
  );
}

export default TopForm;
