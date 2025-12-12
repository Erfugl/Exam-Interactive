import type { FrameData, MaterialData } from './helpers'
import '../scss/product.scss'

interface FramePreview {
  animal:
  {
    name: string,
    slug: string,
    imageAspectRatio: number;
  },
  frame: FrameData;
  material: MaterialData;
  withMat: boolean;
}