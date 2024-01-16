import { Header } from '@/app/ui/components/Wacth/Header';
import { VideoPlayer } from '@/app/ui/components/Wacth/VideoPlayer';

export default function page() {
  return (
    <div className="w-full">
      <Header />
      <VideoPlayer />
    </div>
  );
}
