import SlugLink from "../models/slugLinkModel.js";

const checkSlug = async (req, res) => {
  const { slug } = req.params;

  try {
    const available = await SlugLink.findOne({ slug: slug });
    if (available) {
      return res.status(409).json({ message: `Slug ${slug} used!` });
    }
    res.status(200).json({ message: `You can use ${slug} slug!` });
  } catch (error) {
    console.error(error);
    res.status(500).json("Error while checking slug ", error.message);
  }
};

const getLink = async (req, res) => {
  const { slug } = req.params;
  try {
    if (!slug) {
      return res.status(400).json({ message: `Slug ${slug} is required` });
    }
    const data = await SlugLink.findOne({ slug: slug });
    if (!data) {
      return res.status(404).json({ message: `Slug ${slug} not found` });
    }
    const originalLink = data.originalLink;
    return res.status(200).json({ message: "Original link fetched with slug", data: { originalLink } });
  } catch (error) {
    console.error(`Error while getting link ${error.message}`);
    res.status(500).json({ message: `Error while getting link ${error.message}` });
  }
};

export { checkSlug, getLink };
