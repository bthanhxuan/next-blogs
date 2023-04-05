import { useGlobalState } from '@/state';
import styles from './ArticleItem.module.css';

type PropsType = {
  categories: any
}

const ArticleItemCategories: React.FC<PropsType> = ({ categories }) => {
  const [categoriesList] = useGlobalState('categories');
  console.log("CategoriesList", categoriesList)
  console.log("categories", categories);

  return (
    <ul className={styles["article-item__categories"]}>
      {/* {categoriesList &&
        categoriesList.map((category: any) => {
          const categoryFound = categories.find((item: any) => item === category.id);
          // const categoryFound = categories[category.id];
          console.log('categoryFound', categoryFound);
          return (
            <li key={category.id}>
              <a href="/" className="btn btn-category">
                {categoryFound.name}
              </a>
            </li>
          );
        })} */}
      <li>
        <a href="/" className="btn btn-category">
          News
        </a>
      </li>
      <li>
        <a href="/" className="btn btn-category">
          News
        </a>
      </li>
    </ul>
  );
}

export default ArticleItemCategories;