import { useGlobalState } from '@/state';
import styles from './ArticleItem.module.css';
import { PropsType } from './ArticleItem';
import { Button } from '../shared/Button';
import Link from 'next/link';

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
          // console.log('categoryFound', categoryFound);
          return (
            <li key={categoryId}>
              <Link href="/category/[slug]" as={`/category/${categoryFound.slug}`}>
                <Button className="btn btn-category">
                  {categoryFound.name}
                </Button>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}

export default ArticleItemCategories;