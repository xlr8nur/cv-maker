import InputSection from "./InputSection"

export default function ButtonPanel({ onExportPDF, onReset, onLoadExample }) {
  return (
    <InputSection>
      <div className="horizontal-spaced-container panel">
        <button className='panel-btn' onClick={onExportPDF}>Export as PDF</button>
        <div className="reset-container">
          <button className='panel-btn delete-btn' onClick={onReset}>Reset</button>
          <button className='panel-btn delete-btn' onClick={onLoadExample}>Load Example</button>
        </div>
      </div>
    </InputSection>
  )
}