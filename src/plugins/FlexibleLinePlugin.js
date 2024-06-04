const FlexibleLinePlugin = {
    id: 'flexibleLine',
    afterDraw: (chart) => {
      const ctx = chart.ctx;
  
      chart.data.datasets.forEach((dataset, index) => {
        const meta = chart.getDatasetMeta(index);
        if (!meta.hidden) {
          ctx.save();
          ctx.strokeStyle = dataset.borderColor || '#000000';
          ctx.lineWidth = dataset.borderWidth || 2;
  
          // Set line cap to round for flexible appearance
          ctx.lineCap = 'round';
  
          ctx.beginPath();
  
          meta.data.forEach((element, index) => {
            if (index === 0) {
              ctx.moveTo(element.x, element.y);
            } else {
              ctx.lineTo(element.x, element.y);
            }
          });
  
          ctx.stroke();
          ctx.restore();
        }
      });
    }
  };

  export default FlexibleLinePlugin;