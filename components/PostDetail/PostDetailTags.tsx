import { useGlobalState } from '@/state';
import { Button } from '../shared/Button';
import styles from './PostDetail.module.css';
import Link from 'next/link';

function PostDetailTags({tags}: any) {
  const [categoriesList] = useGlobalState('categories');

  return (
    <div className={styles["post-detail__tags"]}>
      <h2>Tags</h2>
      <ul>
      {categoriesList.length > 0 &&
        tags.map((tag: any) => {
          const categoryFound = categoriesList.find((item: any) => item.id === tag) as any;
          return (
            <li key={tag} style={{ marginRight: '10px' }}>
              <Link href="/category/[slug]" as={`/category/${categoryFound.slug}`}>
                <Button className="btn btn-default">
                  {categoryFound.name}
                </Button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PostDetailTags;
