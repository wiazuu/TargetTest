faturamento_por_estado = {
  'SP' => 67836.43,
  'RJ' => 36678.66,
  'MG' => 29229.88,
  'ES' => 27165.48,
  'Outros' => 19849.53
}

faturamento_total = faturamento_por_estado.values.sum

faturamento_por_estado.each do |estado, valor|
  percentual = (valor / faturamento_total) * 100
  puts "#{estado} - Percentual: #{percentual.round(2)}%"
end
