import { Image, Link, RichText, Text, types } from 'react-bricks/rsc'

export interface ThumbnailProps {
  title: types.TextValue
  description: types.TextValue
  image: types.IImageSource
  hasShadow: boolean
  bgColor: types.IColor & { className: string }
}

const Thumbnail: types.Brick<ThumbnailProps> = ({
  title,
  description,
  image,
  hasShadow,
  bgColor,
}) => {
  return (
    <div
      className={`my-6 mx-6 p-6 text-center w-full border rounded-lg ${
        hasShadow ? 'shadow-xl' : ''
      } ${bgColor?.className}`}
    >
      <Image
        propName="image"
        source={image}
        alt="Fallback alt tag" // Fallback if the editor doesn't set an ALT tag
        maxWidth={600} // For image optimization
        imageClassName="mb-6"
      />

      <Text
        propName="title"
        value={title}
        renderBlock={({ children }) => (
          <h1 className="text-xl font-bold">{children}</h1>
        )}
      />
      <RichText
        propName="description"
        value={description}
        renderBlock={({ children }) => (
          <p className="text-lg text-gray-500">{children}</p>
        )}
        placeholder="Type a description"
        allowedFeatures={[
          types.RichTextFeatures.Bold,
          types.RichTextFeatures.Highlight,
          types.RichTextFeatures.Link,
        ]}
        renderHighlight={({ children }) => (
          <span className="px-1 rounded bg-blue-200 text-blue-900">
            {children}
          </span>
        )}
        renderLink={({ children, href, target, rel }) => (
          <Link
            href={href}
            target={target}
            rel={rel}
            className="text-sky-500 hover:text-sky-600 transition-colors"
          >
            {children}
          </Link>
        )}
      />
    </div>
  )
}

Thumbnail.schema = {
  name: 'thumbnail',
  getDefaultProps: () => ({
    title: 'Hello, world!',
    description: 'Lorem ipsum dolor sit amet.',
    image: {
      hashId: '_9ww44ltEDQ0aSb',
      src: 'https://assets.reactbricks.com/VfE-z-POtxypcqF/images/original/LK5izPyiFcDfVgy.webp',
      srcSet:
        'https://assets.reactbricks.com/VfE-z-POtxypcqF/images/src_set/LK5izPyiFcDfVgy-271.webp 271w,\nhttps://assets.reactbricks.com/VfE-z-POtxypcqF/images/src_set/LK5izPyiFcDfVgy-150.webp 150w',
      type: 'image/webp',
      placeholderSrc:
        'https://assets.reactbricks.com/VfE-z-POtxypcqF/images/placeholder/LK5izPyiFcDfVgy.jpg',
      fallbackSrc:
        'https://assets.reactbricks.com/VfE-z-POtxypcqF/images/original/LK5izPyiFcDfVgy.jpg',
      fallbackSrcSet:
        'https://assets.reactbricks.com/VfE-z-POtxypcqF/images/src_set/LK5izPyiFcDfVgy-271.jpg 271w,\nhttps://assets.reactbricks.com/VfE-z-POtxypcqF/images/src_set/LK5izPyiFcDfVgy-150.jpg 150w',
      fallbackType: 'image/jpeg',
      height: 278,
      width: 271,
      alt: '',
      seoName: '',
      crop: {
        x: 48,
        y: 40,
        width: 271,
        height: 278,
      },
      transform: {
        rotate: 0,
        flip: {
          horizontal: false,
          vertical: false,
        },
      },
    },
    hasShadow: true,
    bgColor: { color: '#ffffff', className: 'bg-white' },
  }),
  label: 'Thumbnail',
  sideEditProps: [
    {
      name: 'hasShadow',
      label: 'Shadow',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'bgColor',
      label: 'Background',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: [
          {
            label: 'White',
            value: { color: '#ffffff', className: 'bg-white' },
          },
          {
            label: 'Light blue',
            value: { color: '#eff6ff', className: 'bg-blue-50' },
          },
        ],
      },
    },
  ],
}

export default Thumbnail
