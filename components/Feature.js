import styles from "../styles/components/Feature.module.css"
import { storyblokEditable } from "@storyblok/react";
 
const Feature = ({ blok }) => (
  <div className={styles.card} {...storyblokEditable(blok)}>
    {blok.name}
  </div>
);
 
export default Feature;