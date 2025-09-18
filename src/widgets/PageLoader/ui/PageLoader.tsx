import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';

// @ts-ignore
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ className }: PageLoaderProps) => (
  <div className={classNames(cls.pageloader, {}, [className])}>
    <Loader />
  </div>
);
