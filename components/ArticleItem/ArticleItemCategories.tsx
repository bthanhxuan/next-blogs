import { useGlobalState } from '@/state';
import styles from './ArticleItem.module.css';
import { PropsType } from './ArticleItem';
import { Button } from '../shared/Button';

// type PropsType = {
//   categories: any
// }

const ArticleItemCategories: React.FC<PropsType> = ({ post }) => {
  const [categoriesList] = useGlobalState('categories');
  const categories = post.categories;
  // console.log("CategoriesList", categoriesList)
  // console.log("categories", categories);

  return (
    <ul className={styles["article-item__categories"]}>
      {categoriesList.length > 0 &&
        categories.map((categoryId: any) => {
          const categoryFound = categoriesList.find((item: any) => item.id === categoryId) as any;
          // const categoryFound = categoriesList[categoryId];
          // console.log('categoryFound', categoryFound);s
          return (
            <li key={categoryId}>
              <Button href="/" className="btn btn-category">
                {categoryFound.name}
              </Button>
            </li>
          );
        })}
    </ul>
  );
}

export default ArticleItemCategories;