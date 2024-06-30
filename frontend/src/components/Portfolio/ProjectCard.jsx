function ProjectCard({port,idx}){
    return(
        <div className="image-box" key={idx}>
                            <img
                              src={port.cover} // Use 'cover' instead of 'image'
                              className="portfolio-image"
                              alt="portfolio" />
                            <div className="content">
                                <p className="title">{port.title}</p>
                                <h4 className="description">{port.description}</h4>

                                
                                {port.url && (
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >
                                        {port.load ? ("View(30Sec Load)") : ("View")}
                                    </button>
                                )}

                                {port.github && (
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.github)}
                                    >
                                        Github
                                    </button>
                                )}
                                {port.disclaimer && (
                                    <button
                                    className="btn disabled-btn"
                                    disabled={true}
                                    >
                                    {port.disclaimer}
                                    </button>
                                )}

                            </div>
                        </div>
    )
}

export default ProjectCard