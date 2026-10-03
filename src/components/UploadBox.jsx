import { UploadCloud, ImagePlus } from 'lucide-react'

export function UploadBox({ onChange, preview, onRemove, loading }) {
  return (
    <div className="upload-box">
      {preview ? (
        <div className="upload-preview-wrap">
          <img src={preview} alt="Selected plant upload" className="upload-preview" />
          {!loading && (
            <button type="button" className="secondary-btn small-btn" onClick={onRemove}>Remove Image</button>
          )}
        </div>
      ) : (
        <label className="upload-label">
          <input type="file" accept="image/*" onChange={onChange} />
          <div className="upload-content">
            <span className="upload-icon"><UploadCloud size={32} /></span>
            <strong>Upload Image</strong>
            <span>Drag & drop or browse</span>
            <small>JPG, JPEG, PNG</small>
          </div>
        </label>
      )}

      {!preview && (
        <div className="upload-actions">
          <button type="button" className="secondary-btn small-btn"><ImagePlus size={15} /> Use Camera</button>
        </div>
      )}
    </div>
  )
}
